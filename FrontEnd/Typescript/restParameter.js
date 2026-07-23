"use strict";
function addConcat(...args) {
    let sum = 0;
    let message = '';
    for (let arg of args) {
        if (typeof arg === 'number') {
            sum += arg;
        }
        else {
            message += arg;
        }
    }
    return [sum, message];
}
let [total, text] = addConcat(10, 20, 40, "Dave", 1, "paris");
console.log(total);
console.log(text);
