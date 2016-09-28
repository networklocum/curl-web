export default function DashboardController($scope, QueryBuilder) {
    $scope.queries = QueryBuilder.queries
}