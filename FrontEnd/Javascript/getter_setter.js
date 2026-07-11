const student = {
    firstName: 'Akshay',
    get getName() {
        return this.firstName;
    },
    set setName(newName){
        this.firstName = newName;
    }
}

console.log(student.getName)

student.setName = 'John'; // student.setName('John') - this is not a function, so we use assignment operator to set the value
console.log(student.getName)