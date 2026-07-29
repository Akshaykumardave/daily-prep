// Static properties and methods can be accessed without creating any instances.

class Dog {
    static bark: string = 'Woof!';

    constructor(private name: string, private owner: string){}

    dogIntro(): string {
        return `${this.name} loves it's owner, ${this.owner}, and says ${Dog.bark}`;
    }
}

let dog1 = new Dog('Wolfie', 'Jessica');
let dog2 = new Dog('Honey', 'James');

console.log(dog1.dogIntro());
console.log(dog2.dogIntro());

console.log(`All dogs says ${Dog.bark}`);