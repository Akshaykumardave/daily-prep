'use strict';

outerLoop: for(let i = 1; i <= 3; i++) {
    innerLoop: for(let j = 1; j <= 3; j++) {
        if(j === 2) {
            continue outerLoop;
        }

        console.log(`i = ${i}, j = ${j}`);
    }
}

function square(n) {
    return n * n;
}

let list = [1,2,3,4];
let mapVal = list.map(square);
console.log(mapVal);

// use the message variable before declaration
console.log(message);

// variable declaration using let keyword
let message;