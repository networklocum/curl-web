import dashboard_import from "../dashboard_import"

export default app => {
    app.config(AppConfig)

    dashboard_import(app)
}

function AppConfig($stateProvider) {
    $stateProvider.state("dashboard", {
        url: "/dashboard",
        controller: require("./controller").default,
        template: require("./index.html")
    })
}

