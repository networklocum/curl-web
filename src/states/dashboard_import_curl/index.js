export default app => {
    app.config(AppConfig)
}

function AppConfig($stateProvider) {
    $stateProvider.state("dashboard.import.curl", {
        url: "/curl",
        controller: require("./controller").default,
        template: require("./index.html")
    })
}

