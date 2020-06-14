import checkPackage from './check-package'

function onMessage (request, sender, sendResponse) {
  var isAsync

  isAsync = false

  switch (request.type) {
    case 'check-package':
      checkPackage(request.data)
        .then(function (report) {
          sendResponse(report)
        })
      isAsync = true
      break
    default:
      // Do nothing
  }
  return isAsync
}

export default onMessage
