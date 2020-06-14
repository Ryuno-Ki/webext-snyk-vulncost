const chai = require('chai')
const jsdom = require('jsdom')

const clearReport = require('../../src/modal/clear-report').default

const { JSDOM } = jsdom
const expect = chai.expect

describe('clearReport', function () {
    beforeEach(function () {
        const { window } = new JSDOM('<section id="report">Filled</section>')
        global.window = window
        global.document = window.document
    })

    it('should clear the report section', function () {
        clearReport()
        const report = document.getElementById('report').innerHTML
        expect(report).to.equal('')
    })
})
 