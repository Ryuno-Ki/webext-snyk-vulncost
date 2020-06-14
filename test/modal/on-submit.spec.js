const chai = require('chai')
const proxyquire = require('proxyquire').noCallThru()

const onSubmit = proxyquire('../../src/modal/on-submit', {
    './build-form-data': () => {},
    './clear-report': () => {},
    './send-form-data': () => {}
}).default

const expect = chai.expect

describe('onSubmit', function () {
    // TODO: Currently hard to test meaningful
    it('should submit form data', function () {
        const fakeEvent = {
            preventDefault: () => {},
            target: {
                elements: []
            }
        }
        expect(onSubmit(fakeEvent)).to.not.throw
    })
})
 