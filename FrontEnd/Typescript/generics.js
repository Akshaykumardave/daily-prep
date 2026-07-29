"use strict";
/**
 *
 * feature that allows you to create reusable, flexible code components that work across a variety
 * of data types rather than a single static type, all while completely preserving type safety
 */
// 1. Generic function
function identity(value) {
    return value;
}
const value1 = identity("Hello");
const value2 = identity("World");
console.log(value1);
console.log(value2);
;
let stringBox;
stringBox = { value: "Hello" };
console.log(stringBox.value);
let numberBox;
numberBox = { value: 100 };
console.log(numberBox.value);
// 3. Generic classes - allows us to define a class that can work with any data type, while still preserving type safety.
class Container {
    data;
    constructor(value) {
        this.data = value;
    }
    getData() {
        return this.data;
    }
}
const stringContainer = new Container("Generics Test");
console.log(stringContainer.getData());
const numbercontainer = new Container(124);
console.log(numbercontainer.getData());
// Generic constraints - allows you to limit what types can be used with a generic.
function logLength(item) {
    console.log(item.length);
}
logLength("Hello");
logLength([1, 2, 3]);
