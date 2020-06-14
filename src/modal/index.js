import onLoad from './on-load'

/**
 * The Modal which can be extension from the AddOn bar.
 * 
 * @module modal
 */

/**
 * Registers an event listener for DOMContentLoaded
 * 
 * @requires module:modal.onLoad
 * @listens external:event.DOMContentLoaded
 */
window.document.addEventListener('DOMContentLoaded', onLoad, false)