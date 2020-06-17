import browser from 'webextension-polyfill'

import onMessage from './on-message'

/**
 * Sets up background handlers
 *
 * @module background
 * @requires module:background.onMessage
 */

/**
 * @name index
 * @memberof module:background
 * @static
 * @listens module:modal~message
 *
 * @mermaid
 *   graph TD;
 *     id1((Start))
 *     id2((Fin))
 *     id3{"Is request.type == 'check-package'?"}
 *
 *     id1 --> onMessage;
 *     onMessage --- id3;
 *     id3-- "yes" -->handleCheckPackage;
 *     handleCheckPackage -.-> sendResponse;
 *     sendResponse --> id2;
 *     id3-- "no" -->id2;
 *
 * @mermaid
 *   sequenceDiagram
 *     participant handleCheckPackage
 *     participant checkPackage
 *     participant getTestUrlForPackageName
 *     participant getUtmParameters
 *     participant getBrowser
 *
 *     handleCheckPackage->>checkPackage: unpacked request object
 *     checkPackage->>getTestUrlForPackageName: delegate URL building
 *     getTestUrlForPackageName->>getUtmParameters: delegate UTM parameter
 *     getUtmParameters->>getBrowser: determine browser in use
 *     getBrowser->>getUtmParameters: report back found browser
 *     getUtmParameters->>getTestUrlForPackageName: built UTM parameter string
 *     getTestUrlForPackageName->>checkPackage: built URL with UTM parameters
 *     checkPackage->>handleCheckPackage: Make request
 */
browser.runtime.onMessage.addListener(onMessage)
