let num: number[] = [1, 2, 3, 4];
let sum = 0;
function printNum(arg: number): void {
    sum += arg;
}

num.forEach(printNum);
console.log(sum);

// num.forEach((n, index, num) => {
//     sum += n
//     console.log(n + 'at position - ' + index);
// });

const arrNum = [1,2,3,4,5];
let arrSum = 0;
const square = (num: number): void  => {
    arrSum += num;
}

arrNum.forEach(square);
console.log(arrSum);

let squareType: Function;
squareType = function(num: number) {
    return num * num;
}

console.log(square(4));   