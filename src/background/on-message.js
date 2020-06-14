import handleCheckPackage from './handle-check-package'

/**
 * Event handler for incoming messages.
 * 
 * @memberof module:background
 * @requires module:background.handleCheckPackage
 * @param {module:background.WebExtensionRequest} request 
 * @param {*} sender
 * @param {module:background.WebExtensionResponse} sendResponse 
 */
function onMessage (request, sender, sendResponse) {
  let isAsync = false

  if (request.type === 'check-package') {
    handleCheckPackage(request, sendResponse)
    isAsync = true
  }
  return isAsync
}

export default onMessage
