/**
 * Searches an Array of URLs for GitHub ones.
 * Especially those for a package.json
 *
 * @param {Array<string>} urls
 */
function filterForGithubUrls (tabs) {
  return tabs.map((tab) => tab.url)
    .map((url) => new URL(url))
    .filter((url) => url.hostname === 'github.com')
    .filter((url) => url.pathname.endsWith('package.json'))
    .map((url) => url.href)
}

export default filterForGithubUrls
