const chai = require('chai')
const jsdom = require('jsdom')
const proxyquire = require('proxyquire').noCallThru()
const sinon = require('sinon')
const sinonChai = require('sinon-chai')

const onLoad = proxyquire('../../src/modal/on-load', {
    './on-submit': () => {}
}).default

const { JSDOM } = jsdom
chai.use(sinonChai)
const expect = chai.expect

describe('onLoad', function () {
    beforeEach(function () {
        const { window } = new JSDOM('<form></form>')
        global.window = window
        global.document = window.document
    })

    // TODO: Perhaps pass in the event handler to onLoad?
    it('should register a submit event listener', function () {
        onLoad()
        const form = document.querySelector('form')
        form.submit = sinon.spy()
        expect(form.submit()).to.not.throw
    })
})
 