export default app => {
    app.config(AppConfig)
}

function AppConfig($stateProvider) {
    $stateProvider.state("editor.show", {
        url: "/:id",
        controller: require("./controller").default,
        template: require("./index.html")
    })
}

