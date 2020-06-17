import detectGithub from './detect-github'
import onSubmit from './on-submit'

/**
 * Sets up event listener on load
 *
 * @memberof module:modal
 * @requires module:modal.onSubmit
 * @listens module:modal.submit
 */
function onLoad () {
  const form = window.document.querySelector('form')
  form.addEventListener('submit', (event) => {
    monkeyPatchInput(event)
    onSubmit(event)
  }, false)

  detectGithub()
}

function monkeyPatchInput (formSubmitEvent) {
  const elements = formSubmitEvent.target.elements.map((element) => {
    let version = 'latest'
    if (element.value.contains('@') && element.value.charAt(0) !== '@') {
      version = element.value.split('@')[1]
    }

    return {
      id: '',
      value: version
    }
  })

  return {
    elements
  }
}

export default onLoad
