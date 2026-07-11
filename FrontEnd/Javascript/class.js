class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

let person1 = new Person('Akshay', 25);
let person2 = new Person('Dave', 21);

person1.greet();
person2.greet();
// console.log(person1.name + ' - ' + person1.age);
// console.log(person2.name + ' - ' + person2.age);