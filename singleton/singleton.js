/**
 * The `Singleton` pattern.
 */
var someSingleton = (function () {

    'use strict';

    /**
     * Holds a reference to the singleton instance.
     */
    var instance;

    /**
     * This function contains the objects' main logic.
     */
    var createInstance = function () {

        /**
         * Declare a private function.
         */
        var somePrivateFunction = function () {
            //...
        };

        /**
         * Declare a public function.
         */
        var somePublicFunction = function () {
            //...
        };

        /**
         * Return object with pointers to public functions.
         */
        return {
            'somePublicFunction': somePublicFunction
        };

    };

    /**
     * This function returns the singleton instance. If the instance
     * does not exist, it will be created.
     */
    var getInstance = function () {
        if (!instance) {
            instance = createInstance();
        }
        return instance;
    };

    /**
     * Return an object with pointer to the `someSingleton::getInstance()` function.
     */
    return {
        'getInstance': getInstance
    };
}());

// Usage:
var foo = someSingleton.getInstance();
foo.somePublicFunction();