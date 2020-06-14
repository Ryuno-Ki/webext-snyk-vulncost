/**
 * Updates the UI with report information.
 * 
 * @memberof module:modal
 * @param {{}} report 
 */
function updateReport (report) {
  document.getElementById('report').textContent = [
    report.resultTitle,
    ' has ',
    report.totalVulns,
    ' known vulnerabilities.'
  ].join('')
}

export default updateReport