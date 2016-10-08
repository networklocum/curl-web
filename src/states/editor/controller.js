export default function EditorController($scope, QueryStorage) {
    $scope.queries = QueryStorage.queries
}