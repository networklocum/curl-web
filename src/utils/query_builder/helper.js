const curlLib = require("curl-parser")

const headers_to_ignore = ["Origin","Accept-Encoding","User-Agent","Cookie","Connection","Referer"]

export const parse = (curl_string) => {
    const result = curlLib.parse_curl(curl_string)

    // transform ["Pragma: no-cache"] to {Pragma: "no-cache"}
    result.headers = result.headers.reduce((state, header) => {
        const parts = header.split(":")

        if(headers_to_ignore.indexOf(parts[0]) == -1)
            state[parts[0]] = parts[1].trim()

        return state
    }, {})

    return result
}
