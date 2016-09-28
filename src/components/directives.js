/**
  * useful for directives without templates
  */



// add states to a promise
// example of use: let"s imagine that foo() returns a promise (like a $http.get())
// in your template, you can do
// * <button ng-click="MyPromise = foo()">click me</button>
// * <div promise="MyPromise"></div> invisible element that decorates the promise
// now, you have access to
// * MyPromise.isLoading
// * MyPromise.isLoaded
// * MyPromises.hasError
// * MyPromise.errorMessage
// now, you can use it in your template (or controller)
// * <div ng-if="MyPromise.isLoading">It"s loading !!</div>
// * <div class="error" ng-if="MyPromise.hasError">{{MyPromise.errorMessage}}</div>

function PromiseDirective() {
    return {
        restrict: "A",
        scope: {
            promise: "="
        },
        controller($scope, $q) {
            // it's low level, so might break
            $scope.$watch("promise.$$state.status", (status) => {

                if(status === undefined) return
                $scope.promise.isLoading = (status == 0)
                $scope.promise.isLoaded  = (status == 1)
                $scope.promise.hasError  = (status == 2)

                if(status == 2) {
                    $scope.promise.errorMessage = $scope.promise.$$state.value.statusText || $scope.promise.$$state.value.message || $scope.promise.$$state.value
                    $scope.promise.errorCode = $scope.promise.$$state.value.status
                    $scope.promise.error = $scope.promise.$$state.value
                }
            })
        }
    }
}

// <span loader="promise.isLoading">Loading</span>
function LoaderDirective() {
    return {
        restrict: "EA",
        transclude: true,
        scope: {
            show: "=loader"
        },
        // eslint-disable-next-line quotes
        template: `<span ng-show="show"><i class="fa fa-spinner fa-spin"></i> <span ng-transclude></span></span>`
    }
}

export default app => {
    app.directive("promise", PromiseDirective)
    app.directive("loader", LoaderDirective)
}