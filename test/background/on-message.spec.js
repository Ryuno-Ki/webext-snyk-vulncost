const chai = require('chai')
const proxyquire = require('proxyquire')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')

const onMessage = proxyquire('../../background/on-message', {
    './handle-check-package': {
        default: (request, cb) => cb({})
    }
}).default

chai.use(sinonChai)
const expect = chai.expect

describe('onMessage', function () {
    afterEach(function () {
        sinon.restore()
    })

    describe('when receiving a "check-package" request', function () {
        it('should check the package and send a response', function () {
            this.timeout(4000)
            const fakeRequest = {
                type: 'check-package'
            }
            const fakeSender = null
            const fakeSendResponse = sinon.spy()
            const result = onMessage(fakeRequest, fakeSender, fakeSendResponse)
            expect(result).to.equal(true)
            expect(fakeSendResponse).to.have.been.calledOnce
        })
    })
    describe('when receiving another request', function () {
        it('should do nothing', function () {
            const fakeRequest = {}
            const fakeSender = null
            const fakeSendResponse = () => {}
            const result = onMessage(fakeRequest, fakeSender, fakeSendResponse)
            expect(result).to.equal(false)
        })
    })
})
 