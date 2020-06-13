;(function () {
  'use strict';
  document.addEventListener('DOMContentLoaded', onLoad, false)

  function onLoad () {
    var form = document.querySelector('form')
    form.addEventListener('submit', onSubmit, false)
  }

  function onSubmit (event) {
    var formData

    event.preventDefault()
    clearReport()
    formData = buildFormData(event.target.elements)
    sendFormData(formData)
  }

  function buildFormData (formElements) {
    var formData

    formData = {}

    Array.prototype.slice.call(formElements)
      .filter((function (formElement) {
        return formElement.nodeName.toLowerCase() === 'input'
      }))
      .forEach(function (formElement) {
	formData[ formElement.id ] = formElement.value
      })

    return formData
  }

  function sendFormData (formData) {
    var payload

    payload = {
      type: 'check-package',
      data: {
        packageName: formData.packageName
      }
    }

    browser.runtime
      .sendMessage(payload)
      .then(handleResponse, handleError)
  }

  function handleResponse (response) {
    updateReport(response)
  }

  function handleError (error) {
    console.error('Error', error)
  }

  function updateReport (report) {
    document.getElementById('report').innerHTML = [
      report.resultTitle,
      ' has ',
      report.totalVulns,
      ' known vulnerabilities.'
    ].join('')
  }

  function clearReport () {
    document.getElementById('report').innerHTML = ''
  }
})();
