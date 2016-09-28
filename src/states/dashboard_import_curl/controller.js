export default function DashboardCreatequeryController($scope, QueryBuilder, $state) {
    $scope.import = (curl_string) => {
        const {id} = QueryBuilder.createQueryFromCurl(curl_string)

        $state.go("editor.show", {id})
    }
}