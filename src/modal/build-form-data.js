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
    .filter(function (formElement) {
      return formElement.nodeName.toLowerCase() === 'input'
    })
    .forEach(function (formElement) {
      // Strip everything until the first digit
      const version = formElement.value.replace(/^\D*/, '')
      formData[formElement.id] = version
    })

  return formData
}

export default buildFormData
