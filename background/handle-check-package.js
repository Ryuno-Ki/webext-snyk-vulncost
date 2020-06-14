import checkPackage from './check-package'

async function handleCheckPackage (request, sendResponse) {
  const report = await checkPackage(request.data)
  return sendResponse(report)
}

export default handleCheckPackage