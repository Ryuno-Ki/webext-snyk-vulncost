import fetchPackageJson from './fetch-package-json'

async function handleFetchPackageJson (request, sendResponse) {
  const packageJson = await fetchPackageJson(request.data.repo)
  const response = Object.assign(
    {},
    {
      ...packageJson.dependencies,
      ...packageJson.devDependencies
    }
  )
  return sendResponse(response)
}

export default handleFetchPackageJson
