/**
 * Returns the detected browser
 *
 * @memberof module:background
 * @returns {string}
 */
function getBrowser () {
  var url

  url = window.browser.runtime.getURL('background.js')
  console.debug('Browser detected', url)
  if (new URL(url).protocol === 'moz-extension:') {
    return 'firefox'
  }

  if (new URL(url).protocol === 'chrome-extension:') {
    return 'chrome'
  }
  return 'browser'
}

export default getBrowser
