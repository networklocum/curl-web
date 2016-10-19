import query_builder from "./query_builder"
import query_runner from "./query_runner"
import query_storage from "./storage"

export default app => {
    query_builder(app)
    query_runner(app)
    query_storage(app)
}