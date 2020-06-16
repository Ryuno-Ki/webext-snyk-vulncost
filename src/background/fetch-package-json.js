import queryGithub from './query-github'

function pruneOutdatedCacheEntries () {
    Object.keys(fetchPackageJson._cache).forEach((key) => {
        const now = new Date()
        const oneHourInMilliseconds = 60 * 60 * 1000

        if (now - fetchPackageJson._cache[ key ].timestamp > oneHourInMilliseconds) {
            delete fetchPackageJson._cache[ key ]
        }
    })
}

async function fetchPackageJson(githubUrl) {
    pruneOutdatedCacheEntries()

    if (fetchPackageJson._cache[ githubUrl ]) {
        return fetchPackageJson._cache[ githubUrl ].pkg
    }

    const packageJson = await queryGithub(githubUrl)
    const now = new Date() - 0  // Unix timestamp
    fetchPackageJson._cache[ githubUrl ] = {
        pkg: packageJson,
        timestamp: now
    }
    return packageJson
}
fetchPackageJson._cache = {}

export default fetchPackageJson
