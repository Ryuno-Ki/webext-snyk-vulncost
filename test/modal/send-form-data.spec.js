const chai = require('chai')
const proxyquire = require('proxyquire').noCallThru()
const sinon = require('sinon')
const sinonChai = require('sinon-chai')

const browser = {
    runtime: {
        sendMessage: () => Promise.resolve({})
    }
}
const handleErrorSpy = sinon.spy()
const handleResponseSpy = sinon.spy()

const sendFormData = proxyquire('../../src/modal/send-form-data', {
    'webextension-polyfill': browser,
    './handle-error': handleErrorSpy,
    './handle-response': handleResponseSpy
}).default

chai.use(sinonChai)
const expect = chai.expect

describe('sendFormData', function () {
    beforeEach(function () {
        global.browser = browser
    })

    describe('when package was successfully checked', function () {
        it('should handle the response', function () {
            const fakeFormData = {
                packageName: 'test'
            }
            isSuccess(true)
            sendFormData(fakeFormData)
            expect(handleResponseSpy).to.have.been.called
            expect(handleErrorSpy).not.to.have.been.called
        })
    })

    describe('when package could not be checked', function () {
        // TODO: Would be easier if a Promise were returned
        it('should handle the error', function (done) {
            const fakeFormData = {
                packageName: 'test'
            }
            isSuccess(false)
            expect(function () {
              sendFormData(fakeFormData)
            }).to.throw()
            done()
        })
    })
})

function isSuccess (enableHappyPath) {
    if (enableHappyPath) {
        global.browser.runtime.sendMessage = () => new Promise(handleResponseSpy, null)
    } else {
        global.browser.runtime.sendMessage = () => {
            throw new Error('Expecting failure!')
        }
    }
}