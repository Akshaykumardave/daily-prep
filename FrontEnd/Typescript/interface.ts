interface Person {
    name: string;
    age: number;
}

const person: Person = {
    name: 'John Doe',
    age: 30
};
console.log(typeof person); // output - object

// Interface with readonly property
interface ReadonlyPerson {
    readonly name: string;
    age: number;
}

const readonlyPerson: ReadonlyPerson = {
    name: 'Jane Doe',
    age: 25
};
// readonlyPerson.name = 'John Smith'; // Error: Cannot assign to 'name' because it is a read-only property

// Interface with function type
interface Greet {
    (name: string): string;
}

const greet: Greet = (name) => `Hello, ${name}!`;
console.log(greet('Alice')); // output - Hello, Alice!