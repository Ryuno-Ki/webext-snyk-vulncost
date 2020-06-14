const chai = require('chai')

const getUtmParameters = require('../../src/background/get-utm-parameters').default

const expect = chai.expect

describe('getUtmParameters', () => {
    it('should return an utm string', () => {
        const utm = getUtmParameters()
        expect(utm).to.contain('utm_medium')
        expect(utm).to.contain('utm_source')
        expect(utm).to.contain('utm_campaign')
    })
})
 