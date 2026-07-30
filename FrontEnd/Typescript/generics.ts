/**
 * 
 * feature that allows you to create reusable, flexible code components that work across a variety 
 * of data types rather than a single static type, all while completely preserving type safety
 */

// 1. Generic function
function identity<T>(value: T): T {
    return value;
}

const value1 = identity("Hello");
const value2 = identity("World");

console.log(value1);
console.log(value2);


// 2. Generic interface - allows us to define the shape of the data that can work with different data types while still being type-safe.
interface Box<T>{
    value: T;
};

let stringBox: Box<string>;
stringBox = {value: "Hello"};
console.log(stringBox.value);

let numberBox: Box<number>;
numberBox = {value: 100};
console.log(numberBox.value);


// 3. Generic classes - allows us to define a class that can work with any data type, while still preserving type safety.

class Container<T> {
    private data: T;

    constructor(value: T) {
        this.data = value;
    }

    getData(): T {
        return this.data;
    }
}

const stringContainer = new Container("Generics Test");
console.log(stringContainer.getData());

const numbercontainer = new Container(124);
console.log(numbercontainer.getData());


// Generic constraints - allows you to limit what types can be used with a generic.

function logLength<T extends {length: number}>(item: T): void {
    console.log(item.length);
}

logLength("Hello");
logLength([1, 2, 3]);


// Using generics with array

function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}

console.log(getFirstElement(["a", "b", "c"]));