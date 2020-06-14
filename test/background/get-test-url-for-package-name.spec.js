const chai = require('chai')

const getTestUrlForPackageName = require('../../src/background/get-test-url-for-package-name').default

const expect = chai.expect

describe('getTestUrlForPackageName', () => {
    it('should return an url', () => {
        const mockPackage = 'snyk'
        const link = getTestUrlForPackageName(mockPackage)
        const url = new URL(link)

        expect(url.protocol).to.equal('https:')
        expect(url.hostname).to.equal('snyk.io')
        expect(url.pathname).to.contain(mockPackage)
        expect(mapSearchParamsToObject(url.search).type).to.equal('json')
    })
})

// kudos: https://twitter.com/codebubb/status/1232598766395498496
function mapSearchParamsToObject (searchParams) {
    const params = new URLSearchParams(searchParams)
    return Array.from(params.keys())
                .reduce((acc, key) => {
                    return Object.assign(
                        {},
                        acc,
                        { [key]: params.get(key) }
                    )
                }, {})
}