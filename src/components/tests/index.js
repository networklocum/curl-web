export default app => {
    app.directive("tests", () => {
        return {
            scope: {
                tests: "="
            },
            template: require("./index.html")
        }
    })
}