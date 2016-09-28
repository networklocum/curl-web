import {expect} from "chai"
import {parse} from "../src/utils/query_builder/helper"

const samples = getSamples()


describe("curlParser", () => {

    samples.map((sample, index) => {
        it("should parse command #"+(index+1), () => {
            const result = parse(sample.command)

            expect(result.url).to.equal(sample.expected.url)
            expect(result.method).to.equal(sample.expected.method)
            expect(result.data.ascii).to.equal(sample.expected.data)
            expect(result.headers).to.deep.equal(sample.expected.headers)
        })
    })

    it("should throw if not a curl command", () => {
        expect(() => parse("crul google.com")).to.throw()
    })
})






function getSamples() {
    return [
        {
            command: `curl http://localhost:8080 -XPOST -d '{"resources": ["*sessions.*applications.locum.>properties"], "params": {"*sessions": {"status": "filled"}}}'`,
            expected: {
                url: "http://localhost:8080",
                method: "POST",
                headers: [],
                data: '{"resources": ["*sessions.*applications.locum.>properties"], "params": {"*sessions": {"status": "filled"}}}'
            }
        },
        {
            command: `curl google.com`,
            expected: {
                url: "google.com",
                method: "GET",
                headers: []
            }
        }
    ]
}