export const TestRunner = function TestRunnerFactory($parse) {

    return {
        run
    }

    function run(string_test, data) {
        const results = {fails: 0, successes: 0, tests: []}
        string_test.split("\n").filter(e => e.match(/[a-z]/)).map(expression => {
            try {
                $parse(expression)({
                    expect: chai.expect,
                    data,
                    typeof(value) { return typeof value}
                })
                results.tests.push({expression})
                results.successes++
            } catch(e) {
                results.tests.push({expression, error: e})
                results.fails++
            }
        })

        return results
    }
}