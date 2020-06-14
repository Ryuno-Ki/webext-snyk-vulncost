import getUtmParameters from './get-utm-parameters'

/**
 * Builds the URL for a packageName
 * 
 * @memberof module:background
 * @requires module:background.getUtmParameters
 * @param {string} packageName 
 * @returns {string}
 */
function getTestUrlForPackageName (packageName) {
  var url

  url = 'https://snyk.io/test/npm/' + packageName + '?type=json&' + getUtmParameters()
  return url
}

export default getTestUrlForPackageName
