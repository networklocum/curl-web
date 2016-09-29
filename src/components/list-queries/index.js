export default app => {
    app.directive("listQueries", () => {
        return {
            scope: {
                queries: "="
            },
            template: require("./index.html")
        }
    })

    require("./index.less")
}