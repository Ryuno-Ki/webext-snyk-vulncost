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
  const report = await checkPackage(request.data.packageName)
  return sendResponse(report)
}

export default handleCheckPackage
