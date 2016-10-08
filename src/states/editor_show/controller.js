
export default function EditorShowController($scope, QueryBuilder, QueryRunner, $stateParams, TestRunner) {
    $scope._ = {
        content: "body",
        contentResponse: "response"
    }

    $scope.query = QueryBuilder.getQuery($stateParams.id)

    $scope.trigger = () => {
        delete $scope.response

        return QueryRunner.run($scope.query, {value: Date.now()}) // second value is a random context for now
            .then(data => {
                $scope.tests = TestRunner.run($scope.query.tests, data)

                return data
            })
            .then(data => $scope.response = data)
            .catch(data => $scope.response = data)
    }
}