import checkPackage from './check-package'

/**
 * Unpacks a request to check the package contained within.
 *
 * @memberof module:background
 * @requires module:background.checkPackage
 * @async
 * @param {module:background.WebExtensionRequest} request
 * @param {module:background.WebExtensionResponse} sendResponse
 */
async function handleCheckPackage (request, sendResponse) {
  let report
  const packageName = request.data.packageName
  const packageVersion = request.data.packageVersion
  const packageWithVersion = `${packageName}@${packageVersion}`
  // TODO: Check for length > 0
  report = await checkPackage(packageWithVersion)
  try {
    // Could be HTML or JSON
    report = JSON.parse(report)
  } catch (exc) {
    console.debug(packageWithVersion)
    console.error(exc)
    report = {}
  }
  return sendResponse({
    packageName,
    packageVersion,
    report
  })
}

export default handleCheckPackage
