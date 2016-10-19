export default function EditorShowController($scope, QueryRunner, QueryStorage, $stateParams, $http) {
    $scope._ = {}

    $scope.query = QueryStorage.get($stateParams.id)

    $scope.trigger = () => {
        delete $scope.response

        return QueryRunner.run($scope.query, {value: Date.now()}) // second value is a random context for now
            .then(data => $scope.response = data)
            .catch(data => $scope.response = data)
    }
}