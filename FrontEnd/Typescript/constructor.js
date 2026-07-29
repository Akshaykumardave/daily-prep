"use strict";
class Student {
    name;
    constructor(name) {
        this.name = name;
        console.log("Consturctor is called..!!");
    }
    greet() {
        return `Welcome, ${this.name}`;
    }
}
let student = new Student('Dave');
console.log(student.greet());
