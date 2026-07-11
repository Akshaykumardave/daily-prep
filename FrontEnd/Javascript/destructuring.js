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