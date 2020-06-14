const chai = require('chai')

const buildFormData = require('../../src/modal/build-form-data').default

const expect = chai.expect

describe('buildFormData', function () {
    it('should build the form data from form elements', function () {
        const fakeFormElements = [{
            id: 'test',
            value: 'value',
            nodeName: 'input'
        }]
        const expected = {
            test: 'value'
        }

        const actual = buildFormData(fakeFormElements)
        expect(actual).to.deep.equal(expected)
    })
})
 