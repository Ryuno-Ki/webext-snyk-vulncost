const chai = require('chai')
const proxyquire = require('proxyquire').noCallThru()

const getUtmParameters = proxyquire('../../src/background/get-utm-parameters', {
    './get-browser': () => 'browser'
}).default

const expect = chai.expect

describe('getUtmParameters', () => {
    it('should return an utm string', () => {
        const utm = getUtmParameters()
        expect(utm).to.contain('utm_medium')
        expect(utm).to.contain('utm_source')
        expect(utm).to.contain('utm_campaign')
    })
})