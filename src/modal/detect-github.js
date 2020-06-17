import onSubmit from './on-submit'

function handleResponse (response) {
  const headline = '<h2>Tick all packages to check</h2>'
  const submitButton = '<button type="submit">Check packages</button>'
  const list = Object.keys(response).map((key) => {
    return `
            <li>
                <label for="${key}">
                    <input
                        type="checkbox"
                        id="${key}"
                        name="${key}"
                        value="${response[key]}"
                        checked="checked" />
                    ${key}@${response[key]}
                    <span class="report"></span>
                </label>
            </li>
        `
  }).join('')
  const text = `<form>${headline}<ul>${list}</ul>${submitButton}</form>`
  document.getElementById('detected-services').innerHTML = text
  const form = document.querySelector('#detected-services form')
  form.addEventListener('submit', onSubmit, false)
}

function handleError (error) {
  console.error(error)
}

async function detectGithub () {
  const currentTabs = await window.browser.tabs.query({ active: true, currentWindow: true })
  const githubUrls = currentTabs
    .map((tab) => tab.url)
    .map((url) => new URL(url))
    .filter((url) => url.hostname === 'github.com')
    .map((url) => url.href)

  if (githubUrls.length > 0) {
    const githubUrl = githubUrls[0]
    let text = ''

    if (!/package\.json$/.test(new URL(githubUrl).pathname)) {
      text = 'Detected GitHub. Please navigate to a `package.json` for scanning.'
    } else {
      text = 'Scanning...'
    }
    document.getElementById('detected-services').textContent = text

    const payload = {
      type: 'fetch-package-json',
      data: {
        repo: githubUrl
      }
    }

    window.browser.runtime
      .sendMessage(payload)
      .then(handleResponse)
      .catch(handleError)
  }
}

export default detectGithub
