import listQueries from "./list-queries"
import dynamicField from "./dynamic-field"
import response from "./response"
import directives from "./directives"
import filters from "./filters"

export default app => {
    listQueries(app)
    dynamicField(app)
    response(app)

    directives(app)
    filters(app)
}