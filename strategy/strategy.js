/**
 * This variable holds the strategy interface.
 */
var StrategyInterface = function () {};

/**
 * Define the signature of the strategy interface.
 */
StrategyInterface.prototype.execute = function() {
    throw new Error('Function `StrategyInterface::execute()` has to be implemented in concrete strategy.')
};

/**
 * A concrete strategy implementation.
 */
var ConcreteStrategyA = function () {};

/**
 * Extend the strategy interface.
 */
ConcreteStrategyA.prototype = Object.create(StrategyInterface.prototype);

/**
 * Implementation of the strategy interface.
 */
ConcreteStrategyA.prototype.execute = function () {
    //...
};

/**
 * Another concrete strategy implementation.
 */
var ConcreteStrategyB = function () {};

/**
 * Extend the strategy interface.
 */
ConcreteStrategyB.prototype = Object.create(StrategyInterface.prototype);

/**
 * Another implementation of the strategy interface.
 */
ConcreteStrategyB.prototype.execute = function () {
    //...
};

// Usage:
var strA = new ConcreteStrategyA();
strA.execute();

var strB = new ConcreteStrategyB();
strB.execute();