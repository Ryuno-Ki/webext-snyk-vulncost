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
  var isAsync

  isAsync = false

  switch (request.type) {
    case 'check-package':
      handleCheckPackage(request, sendResponse)
      isAsync = true
      break
    default:
      // Do nothing
  }
  return isAsync
}

export default onMessage
