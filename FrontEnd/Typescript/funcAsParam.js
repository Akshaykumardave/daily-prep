"use strict";
let num = [1, 2, 3, 4];
let sum = 0;
function printNum(arg) {
    sum += arg;
}
num.forEach(printNum);
console.log(sum);
// num.forEach((n, index, num) => {
//     sum += n
//     console.log(n + 'at position - ' + index);
// });
const arrNum = [1, 2, 3, 4, 5];
let arrSum = 0;
const square = (num) => {
    arrSum += num;
};
arrNum.forEach(square);
console.log(arrSum);
