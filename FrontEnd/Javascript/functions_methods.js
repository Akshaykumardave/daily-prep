// function
function greet() {
    return 'Hello, World!';
}

const message = greet();
console.log(message); // Output: Hello, World!

let name = 'Akshay';
// function as method inside an object
const user = {
    name: 'John Doe',
    greet: () => {
        return `Hello, ${name}!`;
    },
    hello: function() {
        return `Hello, ${this.name} !`;
    }
}

const greeting = user.greet();
const helloMessage = user.hello();
console.log(greeting); // Output: Hello, Akshay!
console.log(helloMessage); // Output: Hello, John Doe!