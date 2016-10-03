import {parse} from "./helper"

export const QueryBuilder = function QueryBuilderFactory(QueryStorage) {
    // sample
    // http://jsonplaceholder.typicode.com/
    createQueryFromCurl(`curl 'https://jsonplaceholder.typicode.com/posts/1' `)
    createQueryFromCurl(`curl 'https://jsonplaceholder.typicode.com/posts/' -d '{"x":true}'`)

    return {
        createQueryFromCurl
    }

    /** Create a new query from a curl command
      * @params {string:curl_string} "curl google.com"
      */
    function createQueryFromCurl(curl_string) {
        // @throw if the string is not a curl command
        const curl = parse(curl_string)

        let query = {
            /* name: curl.method+" "+curl.url.match(/^https?:\/\/([^\/]*)/)[1], */
            name: curl.url,
            headers: {
                // example of function as value
                timestamp: (context) => {
                    return context.value
                },
                ...curl.headers
            },
            body: curl.data.ascii,
            method: curl.method,
            url: curl.url
        }
        // Storage will add UUID to the query obj
        return QueryStorage.add(query);
    }
}