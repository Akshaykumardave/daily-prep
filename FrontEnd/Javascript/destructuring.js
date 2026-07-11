let obj = {
    name: "John",
    age: 20,

    // contains another object marks
    marks: {
        science: 70,
        math: 75,
        others: {
            height: 5.9,
            weight: 70
        }
    },
    hobbies: ["cricket", "football", "swimming"],    
};

let {name, age, marks: {science, math, others: {height, weight}}, hobbies: [h1, h2, h3]} = obj;

console.log(name); // John
console.log(age);
console.log(science);
console.log(math);
console.log(height);
console.log(weight);
console.log(h1);
console.log(h2);
console.log(h3);


const person = {
    name: 'Akshay',
    age: 30,
    gender: 'Male'
};

const {name: n, age: a, gender: g} = person;
console.log(n + ' ' + a + ' ' + g);

let arrVal = [10];
let [x = 5, y = 100] = arrVal; // assiging default values
console.log(x + ' ----- ' + y);

const newPerson = {
    name: 'Akshay'
};
const {name: personName, personAge = 30} = newPerson; // assigning default values
console.log(personName + ' ---- ' + personAge);

// swapping values
let val1 = 5;
let val2 = 10;

[val1, val2] = [val2, val1]; // swapped
console.log(val1 + '--------------' + val2);

// skipping items
const arrValue = ['one', 'two', 'three'];
const [arr1, , arr3] = arrValue;
console.log(arr1 + '---' + arr3);

const arrValueNew = ['one', 'two', 'three', 'four'];
const [xVal, ...yVals] = arrValueNew;
console.log(xVal);
console.log(yVals);

const personObj = {
    name: 'Raadha',
    age: 13,
    gender: 'Female'
};

const {name:p1, ...p2} = personObj;
console.log(JSON.stringify(p1) + ' - ' + ' ' + JSON.stringify(p2));