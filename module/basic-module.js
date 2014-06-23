/**
 * The `Basic Module` pattern.
 */
var basicModule = (function () {

    'use strict';

    /**
     * Declare a private property within module scope.
     */
    var somePrivateProperty = 42;

    /**
     * Declare a private function within module scope.
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
}());

// Usage:
basicModule.somePublicFunction();