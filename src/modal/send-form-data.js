import browser from 'webextension-polyfill'

import handleError from './handle-error'
import handleResponse from './handle-response'

/**
 * Submits the form data to the background process.
 * 
 * @memberof module:modal
 * @async
 * @requires module:modal.handleError
 * @requires module:modal.handleResponse
 * @param {module:modal.FormData} formData 
 */
function sendFormData (formData) {
  const payload = {
    type: 'check-package',
    data: {
      packageName: formData.packageName
    }
  }

  browser.runtime
    .sendMessage(payload)
    .then(handleResponse)
    .catch(handleError)
}

export default sendFormData
