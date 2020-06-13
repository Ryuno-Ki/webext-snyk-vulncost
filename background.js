;(function () {
  'use strict'

  browser.runtime.onMessage.addListener(onMessage)

  function onMessage (request, sender, sendResponse) {
    var isAsync

    isAsync = false

    switch (request.type) {
      case 'check-package':
        checkPackage(request.data)
	  .then(function (report) {
	    sendResponse(report)
          })
	isAsync = true
      default:
        // Do nothing
    }
    return isAsync
  }

  function checkPackage (data) {
    var packageName, testUrl

    packageName = data.packageName
    testUrl = getTestUrlForPackageName(packageName)
    return fetch(testUrl).then(function (response) { return response.json() })
  }

  function getTestUrlForPackageName (packageName) {
    var url

    url = 'https://snyk.io/test/npm/' + packageName + '?type=json&' + getUtmParameters()
    return url
  }

  function getUtmParameters () {
    var browser

    browser = getBrowser()
    return 'utm_medium=browser&utm_source=' + browser + '&utm_campaign=vuln_cost'
  }

  function getBrowser () {
    var url

    url = browser.runtime.getURL('background.js')
    console.debug('Browser detected', url)
    if (new URL(url).protocol === 'moz-extension:') {
      return 'firefox'
    }
    return 'browser'
  }
})();
