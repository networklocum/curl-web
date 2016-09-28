require("angular")
require("angular-ui-router")


const app = angular.module("app", [
    "ui.router"
])

// initialize our modules
import utils from "./utils"
utils(app)

import states from "./states"
states(app)

import components from "./components"
components(app)
