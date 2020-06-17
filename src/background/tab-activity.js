import fetchPackageJson from './fetch-package-json'
import filterForGithubUrls from './filter-for-github-urls'

/**
 * Updates internal reference to the active tab
 *
 * @async
 * @param {external:tabs} tabs
 */
async function updateActiveTab () {
  const currentTabs = await window.browser.tabs.query({ active: true, currentWindow: true })
  let githubUrls
  try {
    githubUrls = filterForGithubUrls(currentTabs)
  } catch (exc) {
    console.error(exc)
    githubUrls = []
  }

  if (githubUrls.length > 0) {
    const githubUrl = githubUrls[0]
    const packageJson = await fetchPackageJson(githubUrl)
    // TODO: Send to modal - or trigger from there
    console.log(packageJson)
  }
}

export default updateActiveTab
