/**
 * Updates the UI with report information.
 *
 * @memberof module:modal
 * @param {{}} info
 */
function updateReport (info) {
  // const selector = `[id="${info.packageName}"][value="${info.packageVersion}"]`
  const selector = `#${info.packageName}`
  const element = document.querySelector(selector)

  if (element) {
    element.parentElement.querySelector('.report').textContent = `
      has ${info.report.totalVulns} known vulnerabilities
    `
  } else {
    document.getElementById('report').textContent = [
      info.report.resultTitle,
      ' has ',
      info.report.totalVulns,
      ' known vulnerabilities.'
    ].join('')
  }
}

export default updateReport
