export default app => {
    app.directive("dynamicField", () => {
        return {
            scope: {
                source: "=dynamicField",
                name:"@"
            },
            template: require("./index.html"),
            controller: ($scope) => {
                $scope.$watch(`source[${$scope.name}]`, reload)

                $scope.remove = () => {
                    delete $scope.source[$scope.name]
                }

                function reload() {
                    $scope.field = $scope.source[$scope.name]
                    $scope.type = typeof $scope.field
                }
            }
        }
    })
}