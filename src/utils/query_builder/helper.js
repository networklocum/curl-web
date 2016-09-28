const curlLib = require("curl-parser")

export const parse = (curl_string) =>
    curlLib.parse_curl(curl_string)
