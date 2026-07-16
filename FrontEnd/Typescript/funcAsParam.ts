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