import updateReport from './update-report'

/**
 * Handles success case of background process.
 *
 * @memberof module:modal
 * @requires module:modal.updateReport
 * @param {{}} response
 */
function handleResponse (response) {
  updateReport(response)
}

export default handleResponse
