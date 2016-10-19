import dashboard from "./dashboard"
import editor from "./editor"

export default app => {
    app.config(AppConfig)

    dashboard(app)
    editor(app)
}

function AppConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    // $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/dashboard")
}
