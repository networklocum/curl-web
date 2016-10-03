export default function DashboardController($scope, QueryStorage) {
    $scope.queries = QueryStorage.queries
}