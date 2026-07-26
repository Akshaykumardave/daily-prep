type Age = number;
const age: Age = 25;
console.log(typeof age); // output - number

// Alias for Object type
type Person = {
    name: string;
    age: number;
};

const person: Person = {
    name: 'John Doe',
    age: 30
};
console.log(typeof person); // output - object


// Alias for function type
type Adder = (a: number, b: number) => number;
const add: Adder = (a, b,) => a + b;
console.log(add(5, 10)); // output - 15

// Alias for union type
type StringOrNumber = string | number;
const value1: StringOrNumber = 'Hello';
const value2: StringOrNumber = 42;
console.log(typeof value1); // output - string
console.log(typeof value2); // output - number