function getBrowser () {
  var url

  url = browser.runtime.getURL('background.js')
  console.debug('Browser detected', url)
  if (new URL(url).protocol === 'moz-extension:') {
    return 'firefox'
  }
  return 'browser'
}

export default getBrowser
