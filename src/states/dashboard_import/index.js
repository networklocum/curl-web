import dashboard_import_curl from "../dashboard_import_curl"

export default app => {
    app.config(AppConfig)

    dashboard_import_curl(app)
}

function AppConfig($stateProvider) {
    $stateProvider.state("dashboard.import", {
        url: "/import",
        template: require("./index.html")
    })
}

