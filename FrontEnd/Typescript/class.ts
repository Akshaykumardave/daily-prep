class Person {
    public name: string;
    public age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    public greet(): void {
        console.log(`My name is ${this.name} and i am ${this.age} years old..!!`)
    }
}

let person1 = new Person('Akshay', 30);
let person2 = new Person('Dave', 28);

person1.greet();
person2.greet();