"use strict";
// Getter example - getter method are used to access the properties of a class in controlled way.
class Student {
    firstname = 'Akshay';
    get getName() {
        return this.firstname;
    }
}
const student = new Student();
console.log(student.getName);
// Setter example
class Student1 {
    firstName = 'Dave';
    get getName() {
        return this.firstName;
    }
    set changeName(newName) {
        this.firstName = newName;
    }
}
const studentNew = new Student1();
studentNew.changeName = 'Akshay';
console.log(studentNew.getName);
