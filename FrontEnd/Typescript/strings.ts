let message: string = 'hello.!!';
// message[0] = 'H';
console.log(message); // Output: hello.!! (strings are immutable in TypeScript)

let greeting: string = 'Hello, World!';
console.log(greeting);

let greetingNew: String = new String('Hello, TypeScript!');
console.log(greetingNew); 
console.log(greetingNew.isWellFormed()); // true

let abc = 'abc\uD800xyz';
console.log(abc.toWellFormed()); 
