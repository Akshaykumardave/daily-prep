"use strict";
const arr = [1, 2, 8, 14];
const sum = arr.reduce((a, b) => a + b, 0);
console.log(sum); // 25 --> 0 + 1 = 1, 1 + 2 = 3, 3 + 8 = 11, 11 + 14 = 25
const newArr = [['Potatoes', 3], ['Tomatoes', 85], ['Onions', 27]];
const result = newArr.reduce((a, b) => {
    a[b[0]] = b[1];
    return a;
}, {});
console.log(result);
