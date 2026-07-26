let userInput: unknown = 'Hello';

// console.log(userInput.toUpperCase()); // Error: Object is of type 'unknown'.

if(typeof userInput === 'string') {
    console.log(userInput.toUpperCase()); // Output: HELLO
}