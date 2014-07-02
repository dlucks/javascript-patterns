/**
 * The `Inheritance` pattern.
 *
 * This variable contains a super object, that will be extended
 * by some sub objects.
 */
var MySuperObject = function (param1, param2) {
    // Some common properties
    this.param1 = param1;
    this.param2 = param2;
};

/**
 * Add implementation of a common function that will be inherited to sub objects.
 */
MySuperObject.prototype.someCommonFunction = function () {
    console.log(this.param1 + ', ' + this.param2);
};

/**
 * Add an abstract function that has to be implemented in sub objects.
 */
MySuperObject.prototype.someAbstractFunction = function () {
    throw new Error('Function `MySuperObject::someAbstractFunction()` has to be implemented in sub object.');
};

/**
 * Some sub object extending the super object.
 */
var MySubObjectA = new MySuperObject('value1', 'value2');

/**
 * Implementation of abstract function in sub object.
 */
MySubObjectA.someAbstractFunction = function () {
    console.log('Implementation of `MySuperObject::someAbstractFunction()` in `MySubObjectA`.');
};

/**
 * Another sub object extending the super object.
 */
var MySubObjectB = new MySuperObject('value3', 'value4');

/**
 * Another implementation of abstract function in sub object.
 */
MySubObjectB.someAbstractFunction = function () {
    console.log('Implementation of `MySuperObject::someAbstractFunction()` in `MySubObjectB`.');
};

// Usage
MySubObjectA.someCommonFunction();
MySubObjectA.someAbstractFunction();

MySubObjectB.someCommonFunction();
MySubObjectB.someAbstractFunction();