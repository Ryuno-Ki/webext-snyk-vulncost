import getTestUrlForPackageName from './get-test-url-for-package-name'

/**
 * Checks a package against SNYK API.
 * 
 * @async
 * @memberof module:background
 * @requires module:background.getTestUrlForPackageName
 * @param {string} packageName - Name of the package to check
 * @returns {Promise<{}>}
 */
function checkPackage (packageName) {
  var testUrl

  testUrl = getTestUrlForPackageName(packageName)
  return window.fetch(testUrl).then(function (response) { return response.json() })
}

export default checkPackage
