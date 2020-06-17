import buildFormData from './build-form-data'
import clearReport from './clear-report'
import sendFormData from './send-form-data'

/**
 * Handles form submit event
 *
 * @memberof module:modal
 * @requires module:modal.clearReport
 * @requires module:modal.buildFormData
 * @requires module:modal.sendFormData
 * @param {external:FormSubmitEvent} event
 */
function onSubmit (event) {
  event.preventDefault()
  clearReport()
  const formData = buildFormData(event.target.elements)
  sendFormData(formData)
}

export default onSubmit
