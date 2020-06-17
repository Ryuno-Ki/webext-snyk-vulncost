import getBrowser from './get-browser'

/**
 * Builds the UTM Parameters of an URL
 *
 * @memberof module:background
 * @requires module:background.getBrowser
 * @returns {string}
 */
function getUtmParameters () {
  var browser

  browser = getBrowser()
  return 'utm_medium=browser&utm_source=' + browser + '&utm_campaign=vuln_cost'
}

export default getUtmParameters
