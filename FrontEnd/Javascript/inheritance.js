class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello ${this.name}..!! I am from Person class.`);
    }
}

class Student extends Person {

}

let student = new Student('Dave');
student.greet();

class Student1 extends Person {
    constructor(name){
        console.log('Creating student class');
        super(name);
    }
}

let student1 = new Student1('RAM');
student1.greet();