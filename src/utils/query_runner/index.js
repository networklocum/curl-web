import {QueryRunner} from "./service"

export default app => {
    app.factory("QueryRunner", QueryRunner)
}