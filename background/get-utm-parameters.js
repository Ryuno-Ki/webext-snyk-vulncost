import getBrowser from './get-browser'

function getUtmParameters () {
  var browser

  browser = getBrowser()
  return 'utm_medium=browser&utm_source=' + browser + '&utm_campaign=vuln_cost'
}

export default getUtmParameters
