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
  Object.keys(formData).forEach((key) => {
    const data = {
      packageName: key,
      packageVersion: formData[key]
    }

    const payload = {
      type: 'check-package',
      data
    }

    updateStatus(key)

    browser.runtime
      .sendMessage(payload)
      .then(handleResponse)
      .catch(handleError)
  })
}

function updateStatus (packageName) {
  let element
  const selector = `[id="${packageName}"]`
  try {
    element = document.querySelector(selector)
  } catch (exc) {
    console.error(exc)
    return
  }

  if (element) {
    element.parentElement.querySelector('.report').textContent = `
      is checked
    `
  }
}

export default sendFormData
