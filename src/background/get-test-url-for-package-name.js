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
  let pkg = packageName.split('@')
  if (pkg.length > 2) {
    // scoped package and version
    const [, scope, ...rest] = pkg
    pkg = `${encodeURIComponent(['@', scope].join(''))}/${encodeURIComponent([...rest].join(''))}`
  } else {
    // package with version
    pkg = pkg.map((part) => encodeURIComponent(part)).join('/')
  }
  return `https://snyk.io/test/npm/${pkg}?type=json&${getUtmParameters()}`
}

export default getTestUrlForPackageName
