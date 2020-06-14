const chai = require('chai')
const jsdom = require('jsdom')

const updateReport = require('../../src/modal/update-report').default

const { JSDOM } = jsdom
const expect = chai.expect

describe('updateReport', function () {
    beforeEach(function () {
        const { window } = new JSDOM('<section id="report"></section>')
        global.window = window
        global.document = window.document
    })

    it('should update the report section with information', function () {
        const fakeReport = {
            resultTitle: 'title',
            totalVulns: 0
        }
        updateReport(fakeReport)
        const report = document.getElementById('report').textContent
        expect(report).to.contain(fakeReport.resultTitle)
        expect(report).to.contain(fakeReport.totalVulns)
    })
})
 