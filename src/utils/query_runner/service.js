export const QueryRunner = function QueryRunnerFactory($http) {

    return {
        run
    }

    function run(query, context) {
        const method = query.method.toLowerCase()

        if(!$http[method]) {
            throw new Error(`"${method}" is not a valid method`)
        }


        // ES6 reduce doesn't work on object, we need lodash here
        // const headers = query.headers.reduce((state, header, key) => {
        //     if(typeof header == "function") {
        //         state[key] = header(context)
        //     } else {
        //         state[key] = header
        //     }

        //     return state
        // }, {})

        const headers = {}
        Object.keys(query.headers).map(key => {
            const header = query.headers[key]

            if(typeof header == "function") {
                headers[key] = header(context)
            } else {
                headers[key] = header
            }
        })

        let url = query.url
        if(context.proxy) {
            url = "/proxy/"+url
        }

        if(method == "get") {
            return $http[method](url, query.params, {headers})
        }

        // no params yet
        return $http[method](url, query.body, {headers})
    }
}