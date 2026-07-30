/**
 * Decorators is a function that gets attached to a class or 
 * a part of a class(method or property) to modify or add behavior to it.
 * we decorate something by placing the @ symbol followed by the decorator function
 * name above a class or class meembers.
 */

function logger(value: Function, context: ClassDecoratorContext) {
    console.log(`Creating class - ${context.name}`);
}

@logger
class Person {
    constructor(public name: string){}
}

/**
 * logger() is a decorator function that modifies an entire class. Using @logger before
 * the class declaration ensures that the decorator runs as soon as the class is defined,
 * not when it's instantiated.
 */


/** 
 * 
 * There are 4 types of decorator
 * 1. Class decorator
 * 2. Property decorator
 * 3. Method decorator
 * 4. Accessor 
 */