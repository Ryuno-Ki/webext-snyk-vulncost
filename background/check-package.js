import getTestUrlForPackageName from './get-test-url-for-package-name'

function checkPackage (data) {
  var packageName, testUrl

  packageName = data.packageName
  testUrl = getTestUrlForPackageName(packageName)
  return window.fetch(testUrl).then(function (response) { return response.json() })
}

export default checkPackage
