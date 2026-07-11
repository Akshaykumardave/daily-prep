var globalVariale = 'Hello, World!'
var globalVariale = 'Hello, World!'

function blockScope() {
    try {
        console.log(globalVariale);
        // console.log(blockVariable)
        // console.log(VALUE);
    } catch(e) {
        console.error(e.message);
    }
    
    let blockVariable = 'Hello, Block Scope!';
    const VALUE = 'Hello, Constant!';
}

blockScope();
// console.log(globalVariale); // Accessible
// console.log(blockVariable); // Uncaught ReferenceError: blockVariable is not defined
// console.log(VALUE); // Uncaught ReferenceError: VALUE is not defined


let bigInt1 = 11111111111111111111n;
let bigInt2 = 11111111111111111111n;

console.log(bigInt1 == bigInt2);  // true

console.log(bigInt1 + bigInt2); // true