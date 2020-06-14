import handleCheckPackage from './handle-check-package'

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
