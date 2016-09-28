import {parse} from "./helper"

export const QueryBuilder = function QueryBuilderFactory() {
    const queries = []
    const queries_idx = {}

    return {
        createQueryFromCurl,
        getQuery,
        queries
    }

    /** Create a new query from a curl command
      * @params {string:curl_string} "curl google.com"
      */
    function createQueryFromCurl(curl_string) {
        // @throw if the string is not a curl command
        const curl = parse(curl_string)

        const query = {
            id: generateID(),
            name: curl.method+" "+curl.url,
            headers: curl.headers,
            data: curl.data.ascii,
            method: curl.method,
            url: curl.url
        }

        queries.push(query)
        queries_idx[query.id] = query

        return query
    }

    function getQuery(id) {
        return queries_idx[id]
    }
}


/* @todo https://github.com/broofa/node-uuid */
function generateID() {
    return String(Date.now()).slice(8)

}