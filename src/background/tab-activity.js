import browser from 'webextension-polyfill'

import filterForGithubUrls from './filter-for-github-urls'
import queryGithub from './query-github'

/**
 * Updates internal reference to the active tab
 * 
 * @async
 * @param {external:tabs} tabs 
 */
async function updateActiveTab (tabs) {
    const currentTabs = await browser.tabs.query({ active: true, currentWindow: true })
    const githubUrls = filterForGithubUrls(currentTabs)

    if (githubUrls.length > 0) {
        const githubUrl = githubUrls[0]
        const packageJson = await fetchPackageJson(githubUrl)
        // TODO: Send to modal - or trigger from there
        console.log(packageJson)
    }
}

async function fetchPackageJson(githubUrl) {
    if (fetchPackageJson._cache[ githubUrl ]) {
        return fetchPackageJson._cache[ githubUrl ]
    }

    const packageJson = await queryGithub(githubUrl)
    fetchPackageJson._cache[ githubUrl ] = packageJson
    return packageJson
}
fetchPackageJson._cache = {}

export default updateActiveTab