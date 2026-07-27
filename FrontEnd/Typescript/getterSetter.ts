// Getter example - getter method are used to access the properties of a class in controlled way.
class Student {
    private firstname: string = 'Akshay';

    get getName(): string {
        return this.firstname;
    }
}

const student = new Student();
console.log(student.getName);

// Setter example

class Student1 {
    private firstName: string = 'Dave';

    get getName(): string {
        return this.firstName;
    }

    set changeName(newName: string)  {
        this.firstName = newName;
    }
}

const studentNew = new Student1();
studentNew.changeName = 'Akshay';

console.log(studentNew.getName)