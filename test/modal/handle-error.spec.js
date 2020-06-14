const chai = require('chai')
const jsdom = require('jsdom')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')

const handleError = require('../../src/modal/handle-error').default

const { JSDOM } = jsdom
chai.use(sinonChai)
const expect = chai.expect

describe('handleError', function () {
    beforeEach(function () {
        const { window } = new JSDOM()
        global.window = window
        global.console = window.console
    })

    it('should log the error', function () {
        sinon.spy(console, 'error')
        const fakeError = 'Some message'
        handleError(fakeError)
        expect(console.error).to.have.been.calledWith(`Error ${fakeError}`)
    })
})