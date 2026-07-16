// two symbols with the same description
let value1 = Symbol("programiz");
let value2 = Symbol("programiz");
console.log(value2.description) // programiz
value2 = 'Akshay'
console.log('value 2 : ', value2.description)

let numVal = Symbol(100);
let numVal2 = Symbol(100);

let sampleObj = {
    1: 'a',
    2: 'b'
}

let Obj2 = {
    1: 'a',
    2: 'b'
}

console.log(sampleObj == Obj2);  // false - as it uses different memory locations or references
console.log(JSON.stringify(sampleObj) === JSON.stringify(Obj2));  // true
console.log(value1 === value2);  // false
console.log(numVal === numVal2);  // false