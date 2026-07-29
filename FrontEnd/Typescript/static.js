"use strict";
class Dog {
    name;
    owner;
    static bark = 'Woof!';
    constructor(name, owner) {
        this.name = name;
        this.owner = owner;
    }
    dogIntro() {
        return `${this.name} loves it's owner, ${this.owner}, and says ${Dog.bark}`;
    }
}
let dog1 = new Dog('Wolfie', 'Jessica');
let dog2 = new Dog('Honey', 'James');
console.log(dog1.dogIntro());
console.log(dog2.dogIntro());
console.log(`All dogs says ${Dog.bark}`);
