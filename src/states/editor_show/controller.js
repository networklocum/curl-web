export default function EditorShowController($scope, QueryBuilder, $stateParams) {
    $scope.query = QueryBuilder.getQuery($stateParams.id)
}