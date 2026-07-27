"use strict";
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`My name is ${this.name} and i am ${this.age} years old..!!`);
    }
}
let person1 = new Person('Akshay', 30);
let person2 = new Person('Dave', 28);
person1.greet();
person2.greet();
