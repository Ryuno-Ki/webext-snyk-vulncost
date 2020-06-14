const chai = require('chai')
const proxyquire = require('proxyquire').noCallThru()

const handleResponse = proxyquire('../../src/modal/handle-response', {
    './update-report': () => {}
}).default

const expect = chai.expect

describe('handleResponse', function () {
    it('should update the report', function () {
        const fakeResponse = 'Some message'
        expect(handleResponse(fakeResponse)).not.to.throw
    })
})
 