import getTestUrlForPackageName from './get-test-url-for-package-name'

/**
 * Checks a package against SNYK API.
 *
 * @async
 * @memberof module:background
 * @requires module:background.getTestUrlForPackageName
 * @param {string} packageName - Name of the package to check
 * @returns {Promise<string>}
 */
async function checkPackage (packageName) {
  const testUrl = getTestUrlForPackageName(packageName)
  const response = await window.fetch(testUrl)
  // Returns HTML with 200 status code in error case.
  // Fetch can't handle that and everything bursts into flames.
  return response.text()
}

export default checkPackage
