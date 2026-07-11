const age = [10, 20, 30, 40, 50];
age.unshift(100); // adds 100 to the beginning of the array
age.shift(); // removes the first element of the array
age.push(60); // adds 60 to the end of the array
age.pop(); // removes the last element of the array
console.log(age);

age.splice(1, 1); // removes the element at index 1
console.log("after splice", age);

let val = age.toSpliced(2, 1, 25); // creates a new array with the element at index 2 replaced by 25
console.log("after toSpliced", val);

console.log("original array", age.toString()); // converts the array to a string
console.log("index of 30", age.indexOf(30)); // returns the index of the first occurrence of 30

const array = new Array(5).fill(0).at(0); // creates a new array of length 5 and accesses the first element
console.log("new array", array);


const arrayWithMultiVal = [1, 'a', {123: 'xyz'}];
console.log(arrayWithMultiVal);