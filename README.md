# webext-snyk-vulncost

Unofficial web extension to check packages on vulnerabilities.
Runs in Firefox, Chrome and Opera (and likely more web browsers) on desktop.

![SNYK logo](./src/logo/avatar-transparent.png)

## Installation

Clone this repository, then install the dependencies with `npm i`.

## Running

`npm start` will start a Firefox instance with the extension loaded.
For other browsers, you will need to load the `dist/manifest.json` manually.

## Testing

`npm test` will execute the mocha test suite.
Due to the use of `proxyquire` a code coverage report cannot be generated for now.

## TODOs

This extension will recognise if you are browsing a package.json on GitHub and
offer you to scan the (dev)Dependencies for known vulnerabilities.
It is also planned to allow the check when looking at a single JS(X) or TS(x)
file. The agenda includes a check on NPM registry websites as well.

## LICENSE

MIT. Check [LICENSE](./LICENSE.txt) for details.
