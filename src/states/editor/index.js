import editor_show from "../editor_show"

export default app => {
    app.config(AppConfig)

    editor_show(app)
}

function AppConfig($stateProvider) {
    $stateProvider.state("editor", {
        url: "/editor",
        controller: require("./controller").default,
        template: require("./index.html")
    })
}

