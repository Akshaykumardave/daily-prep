//The setTimeout() method executes a block of code after the specified time. The method executes the code only once.

function greet() {
    console.log('Hello setTimeOut..!!');
}

setTimeout(() => {
    greet();
}, 3000);

// setTimeOut method returns intervalID
let intervalID = setTimeout(greet, 3000);
console.log('interval ID ---', intervalID);

// clearTimeout() method
clearTimeout(intervalID);
console.log('setTimeOut is stopped..!!');

// additional parameters setTimeout(funciton, miliseconds, p1, p2, p3.... pN)

function hello(name, lastName) {
    console.log('Hello - ' + name + ' ' + lastName);
}

setTimeout(hello, 3000, 'akshay', 'dave');


