/**
 * Expose isDomLoaded
 */

module.exports = isDomLoaded

/**
 * Ready states
 */

var readyStates = ['complete', 'loaded']

if (!document.documentElement.doScroll) {
  readyStates.push('interactive')
}

/**
 * isDomLoaded
 */

function isDomLoaded () {
  return readyStates.indexOf(document.readyState) !== -1
}
