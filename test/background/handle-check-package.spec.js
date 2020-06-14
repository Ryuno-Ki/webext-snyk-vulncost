const chai = require('chai')
const proxyquire = require('proxyquire').noCallThru()
const sinon = require('sinon')
const sinonChai = require('sinon-chai')

const handleCheckPackage = proxyquire('../../src/background/handle-check-package', {
    './check-package': () => Promise.resolve({})
}).default

chai.use(sinonChai)
const expect = chai.expect

describe('handleCheckPackage', function () {
    afterEach(function () {
        sinon.restore()
    })

    it('should check the package and send a response', function (done) {
        const mockRequest = {
            data: {
                packageName: ''
            }
        }
        const mockSendResponse = sinon.spy()
        const response = handleCheckPackage(mockRequest, mockSendResponse)
        response.then(() => {
            expect(mockSendResponse).to.have.been.called
            done()
        })
    })
})
