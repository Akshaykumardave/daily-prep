// in javascript, this keyword refers to the object where it is called.

// 1. this inside global scope
let a = this;
console.log(a); // this referes to the global window object here -- in the browser

// 2. this inside function -- when this is used inside a function, this referes to the global object
function greet() {
    console.log(this);
}
greet();

// 3. this inside constructor function -- this referes to the object inside which it is used.
function Person() {
    this.name = 'Dave';
    console.log(this);
}

let p1 = new Person();
console.log(p1.name);

// 4. this inside Object method -- this refers to the object it lies within.
const person = {
    name: 'Jack',
    age: 25,
    greet() {
        console.log(this);
        console.log(this.name);
    }
}
person.greet();

// 5. this inside inner function -- when we access this inside an inner function (inside a method), this refers to the global object
const personNew = {
    name: 'Jack',
    age: 25,
    greet() {
        console.log(this);
        console.log(this.age);

            function innerFunction() {
                console.log(this); // refers to global object
                console.log("age", this.age);
            }

            innerFunction();
    }
}

personNew.greet();

// 6. this inside Arrow function -- inside the arrow function, this refers to the parent scope.
const greetNew = {
    name: 'Jack',
    sayHi() {
        let hi = () => console.log(this.name) // refers to name property of greetNew object as it is the parent scope
        hi();
    }
}

greetNew.sayHi();

// 7. this inside function with Strict mode -- when this is used in a function with strict mode, this is undefined.

'use strict';
this.nameNew = 'Jack';
function greetLast() {
    console.log(this); // value is undefined as it's used in strict mode -- comment other all except this to see the output
}
greetLast();