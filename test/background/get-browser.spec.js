const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const proxyquire = require('proxyquire').noCallThru()

const browser = {
    runtime: {
        getURL: () => 'unknown://proto.col/'
    }
}

const getBrowser = proxyquire('../../src/background/get-browser', {
    'webextension-polyfill': browser
}).default

chai.use(chaiAsPromised)
const expect = chai.expect

describe('getBrowser', function () {
    beforeEach(function () {
        global.browser = browser
    })

    describe('when browser is unknown', function () {
        it('should return "browser"', function () {
            setURL('unknown://proto.col')
            expect(getBrowser()).to.equal('browser')
        })
    })

    describe('when browser is Chrome', function () {
        it('should return "chrome"', function () {
            setURL('chrome-extension://some.string')
            expect(getBrowser()).to.equal('chrome')
        })
    })

    describe('when browser is Firefox', function () {
        it('should return "firefox', function () {
            setURL('moz-extension://foo.bar/')
            expect(getBrowser()).to.equal('firefox')
        })
    })
})

function setURL (url) {
    global.browser.runtime.getURL = () => url
}