const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const jsdom = require('jsdom')
const proxyquire = require('proxyquire')

const checkPackage = proxyquire('../../background/check-package', {
    './get-test-url-for-package-name': {
        default: () => ''
    }
}).default

chai.use(chaiAsPromised)
const expect = chai.expect
const { JSDOM } = jsdom

describe('checkPackage', () => {
    it('should fetch the vulnerability data for a package', () => {
        const mockData = {
            packageName: 'axios'
        }
        const expected = {
            resultTitle: 'axios@',
            totalVulns: 0
        }

        setResponse(expected)
        // Fails over global `browser` being undefined + should avoid making actual API request!
        expect(checkPackage(mockData)).to.eventually.equal(expected)
    })
})

function setResponse (response) {
    const fetchResponse = {
        json: () => Promise.resolve(response)
    }
    const { window } = new JSDOM()
    global.window = window
    global.window.fetch = (url) => Promise.resolve(fetchResponse)
}