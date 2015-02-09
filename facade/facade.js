/**
 * The Facade pattern.
 *
 * This pattern hides complex code within an easy to use interface.
 */
var someFacade = (function () {

    'use strict';

    /**
     * Adds an event handler to a given DOM object.
     *
     * Hides different browsers DOM APIs in a single function.
     */
    var addEventHandler = function (element, event, callback) {

        // Add an event handler for all major browsers.
        if (element.addEventListener) {
            element.addEventListener(event, callback, false);

        // Add an event handler for a legacy IE browsers.
        } else if (element.attachEvent) {
            element.attachEvent('on' + event, callback);

        // Add an event handler for all remaining legacy browsers.
        } else {
            element['on' + event] = callback;
        }
    };

    /**
     * Removes an event handler from a given DOM object.
     *
     * Hides different browsers DOM APIs in a single function.
     */
    var removeEventHandler = function (element, event, callback) {

        // Remove an event handler for all major browsers.
        if (element.removeEventListener) {
            element.removeEventListener(event, callback, false);

        // Remove an event handler for a legacy IE browsers.
        } else if (element.detachEvent) {
            element.detachEvent('on' + event, callback);

        // Remove an event handler for all remaining legacy browsers.
        } else {
            element['on' + event] = null;
        }
    };

    /**
     * Return object with pointers to public functions.
     */
    return {
        'addEventHandler': addEventHandler,
        'removeEventHandler': removeEventHandler
    };
}());

// Usage:
someFacade.addEventHandler(/* ... */);
someFacade.removeEventHandler(/* ... */);