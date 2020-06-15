function getOptions () {
    return {
        method: 'GET',
        headers: {
            'User-Agent': 'webext-snyk-vulncost',
        },
    }
}

function request (url, options) {
    return fetch(url, options).then((response) => response.json())
}

function mapToApiUrl (githubUrl) {
    const parts = githubUrl.slice(1).split('/')
    const [ username, repository, blob, branch, path ] = parts
    return `https://api.github.com/repos/${username}/${repository}/git/trees/${branch}`
}

function findPackageJson (tree) {
    let packageJsonLeaf = tree.filter((leaf) => leaf.path === 'package.json')
    if (packageJsonLeaf.length > 0) {
        packageJsonLeaf = packageJsonLeaf[0]
    } else {
        packageJsonLeaf = null
    }
    return packageJsonLeaf
}

function fetchPackageJson (root) {
    const packageJsonLeaf = findPackageJson(root.tree)
    if (packageJsonLeaf) {
        const options = getOptions()
        return request(packageJsonLeaf.url, options)
    }
    return null
}

function parsePackageJson (apiResponse) {
    const decoded = atob(apiResponse)
   // Node.js: Buffer.from(apiResponse, 'base64').toString('utf-8');
    try {
        return JSON.parse(decoded)
    } catch (exc) {
        console.error(exc)
        return null
    }
}

async function queryApiForFile (githubUrl) {
    const url = new URL(githubUrl)
    const apiUrl = mapToApiUrl(url.pathname)
    const options = getOptions()
    const root = await request(apiUrl, options)
    let response
    try {
      response = await fetchPackageJson(root)
    } catch (exc) {
        console.error(exc)
        return null
    }

    if (response) {
        return parsePackageJson(response.content)
    }
    return null
}

export default queryApiForFile
