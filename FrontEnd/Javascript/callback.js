/**
 * In javascript, we can also pass a function as an argument to a function. This function that is passed as an argument inside of another 
 * function is called as a callback function.
 *  
 * The benifit of using a callback funciton is that you can wait for the result of the previous function call and then execute another function call.
 */

function greet(name, callback) {
    console.log('Hi ' + name);
    callback();
}

function callme() {
    console.log('I am a callback function..!!');
}

greet('Akshay', callme);


/**
 * Using setTimeout example
 */

function greetNew(name, callback) {
    console.log('Hello world..!!');
    callback(name);
}

function callMeNew(name) {
    console.log('Hello - ', name);
}

setTimeout(greetNew, 3000, 'Akshay', callMeNew);