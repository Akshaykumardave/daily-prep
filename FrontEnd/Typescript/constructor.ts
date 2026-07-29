class Student {
    readonly name: string;

    constructor(name: string) {
        this.name = name;
        console.log("Consturctor is called..!!");
    }

    greet(): string {
        return `Welcome, ${this.name}`
    }
}

let student = new Student('Dave');
console.log(student.greet());