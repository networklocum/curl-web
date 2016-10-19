export default function DashboardCreatequeryController($scope, QueryBuilder, $state, QueryStorage) {
    $scope.import = (curl_string) => {
        const query = QueryBuilder.createQueryFromCurl(curl_string)

        QueryStorage.add(query);

        const {id} = query

        $state.go("editor.show", {id})
    }
}