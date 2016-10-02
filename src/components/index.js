import listQueries from "./list-queries"
import dynamicField from "./dynamic-field"
import response from "./response"
import directives from "./directives"
import tests from "./tests"

export default app => {
    listQueries(app)
    dynamicField(app)
    response(app)
    tests(app)

    directives(app)
}