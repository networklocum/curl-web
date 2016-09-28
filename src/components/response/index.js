export default app => {
    app.directive("response", () => {
        return {
            scope: {
                response: "="
            },
            template: require("./index.html")
        }
    })
}