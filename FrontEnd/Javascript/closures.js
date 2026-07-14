// Closure provide access to the outer scope of a function from inside the inner function, even after the outer function has closed.

function greet() {
    let name = 'John';

    function displayName() {
        return 'Hi' + ' ' + name;
    }

    return displayName;
}
const g1 = greet();
console.log(g1);
console.log(g1());


// another example
function calculate(x) {
    function multiply(y) {
        return x * y;
    }
    return multiply;
}

const multiply3 = calculate(3); // x value as 3 and returned function is multiply
const multiply4 = calculate(4);

console.log(multiply3);
console.log(multiply3()); // NaN

console.log(multiply3(6)); // x = 3 from outer scope and it multiply with 6
console.log(multiply4(3));