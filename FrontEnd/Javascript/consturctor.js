// constructor function with parameters
function Person (person_name, person_age, person_gender) {

   // assign parameter values to the calling object
    this.name = person_name,
    this.age = person_age,
    this.gender = person_gender,

    this.greet = function () {
        return (`Hi ${this.name}`);
    }
}

// create objects and pass arguments
const person1 = new Person("John", 23, "male");
const person2 = new Person("Sam", 25, "female");

// access properties
console.log(person1.name); // John
console.log(person2.name); // Sam

let square = (n) => {
    return n * n;
}

let square2 = function(n) {
    return n * n;
}

console.log(square(5)); // 25