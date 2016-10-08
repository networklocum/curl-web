import {TestRunner} from "./service"

export default app => {
    app.factory("TestRunner", TestRunner)
}