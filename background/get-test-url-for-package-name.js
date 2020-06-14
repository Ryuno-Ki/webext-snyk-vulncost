import getUtmParameters from './get-utm-parameters'

function getTestUrlForPackageName (packageName) {
  var url

  url = 'https://snyk.io/test/npm/' + packageName + '?type=json&' + getUtmParameters()
  return url
}

export default getTestUrlForPackageName
