require("angular")
require("angular-ui-router")
require("jsonFormatter")
require("jsonFormatter/dist/json-formatter.min.css")

const app = angular.module("app", [
    "ui.router",
    "jsonFormatter"
])

// initialize our modules
import utils from "./utils"
utils(app)

import states from "./states"
states(app)

import components from "./components"
components(app)


require("./styles/index.less")