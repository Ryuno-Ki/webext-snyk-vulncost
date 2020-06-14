import onSubmit from './on-submit'

/**
 * Sets up event listener on load
 * 
 * @memberof module:modal
 * @requires module:modal.onSubmit
 * @listens module:modal.submit
 */
function onLoad () {
  var form = window.document.querySelector('form')
  form.addEventListener('submit', onSubmit, false)
}

export default onLoad