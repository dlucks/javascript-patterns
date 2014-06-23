/**
 * This is an extendable super module.
 */
var superModule = (function () {

    'use strict';

    /**
     * Declare a private property within super module scope.
     */
    var somePrivateProperty = 42;

    /**
     * Declare a private function within super module scope.
     */
    var somePrivateFunction = function () {
        //...
    };

    /**
     * Declare an abstract function that should be implemented in a sub module.
     */
    var someAbstractFunction = function () {
        throw new Error('Method superModule::someAbstractFunction should be implemented in sub module.');
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
        'somePublicFunction': somePublicFunction,
        'someAbstractFunction': someAbstractFunction
    };
}());

/**
 * This is a sub module that extends the super module.
 */
var subModule = (function (superModule) {

    'use strict';

    /**
     * Declare another private function within sub module scope.
     */
    var anotherPrivateFunction = function () {
        //...
    };

    /**
     * Implement super modules abstract function.
     */
    superModule.someAbstractFunction = function () {
        //...
    };

    /**
     * Extend super module by another public function.
     */
    superModule.anotherPublicFunction = function () {

    };

    /**
     * Return extended super module.
     */
    return superModule;

}(superModule));

// Usage:
subModule.somePublicFunction();
subModule.someAbstractFunction();