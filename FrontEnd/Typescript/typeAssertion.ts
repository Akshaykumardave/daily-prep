// Type assertion lets you manually tell TypeScript the type of a value.
//  It doesn't change the value; it just tells TypeScript to treat the value as a specific type.


let value: any = 'hello';
let strlength = (value as string).length; // Type assertion using 'as' syntax
console.log(strlength); // output - 5

// there are 2 ways
// 1. using `as` keyword
// example - 
let value1 = "hello" as string;

// 2. using `<>` angle brackets
let value2 = <string>"hello";

// Assertions with object
let user = {} as {name: string, age: number};