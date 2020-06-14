const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const jsdom = require('jsdom')

const getBrowser = require('../../src/background/get-browser').default
const { JSDOM } = jsdom

chai.use(chaiAsPromised)
const expect = chai.expect

describe('getBrowser', () => {
    describe('when browser is unknown', () => {
        it('should return "browser"', () => {
            setURL('chrome-extension://some.string')
            expect(getBrowser()).to.equal('browser')
        })
    })

    describe('when browser is Firefox', () => {
        it('should return "firefox', () => {
            setURL('moz-extension://foo.bar/')
            expect(getBrowser()).to.equal('firefox')
        })
    })
})

function setURL (url) {
    const { window } = new JSDOM()
    global.window = window
    global.window.browser = {
        runtime: {
            getURL: () => url
        }
    }
}