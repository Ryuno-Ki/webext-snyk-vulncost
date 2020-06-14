/**
 * Reads the form and extracts the form elements for further submission.
 * 
 * @memberof module:modal
 * @param {FormElements} formElements 
 * @returns {module:modal.FormData}
 */
function buildFormData (formElements) {
  const formData = {}

  Array.prototype.slice.call(formElements)
    .filter((function (formElement) {
      return formElement.nodeName.toLowerCase() === 'input'
    }))
    .forEach(function (formElement) {
      formData[ formElement.id ] = formElement.value
    })

  return formData
}

export default buildFormData
