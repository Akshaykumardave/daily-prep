/**
 * Typescript utility types are built-in helpers that makes it easier to work with 
 * and transform data types.
 * Utility types help you wwrite safer, shorter and more flexible code by enabling us to
 * create new types from existing ones.
 */

/**
 * 1. Partial<Type> 
 * This type makes all the properties in a type optional.
 * Use it when you only want some properties from an object.
 */

interface Student {
    id: number;
    name: string;
    gpa: number;
}

type partialStudent = Partial<Student>;

console.log('-----------Partial utility type example output-----------')
let student: partialStudent = {id: 101};
console.log(student);

let student2: partialStudent = {name: 'Dave', gpa: 5};
console.log(student2);

let student3: partialStudent = {id: 105, gpa: 3.2};
console.log(student3);


/**
 * 2. Required
 * This type makes all properties in a type required. Use it when all properties required.
 */

interface StudentRequiredType {
    id: number;
    name: string;
    gpa: number;
}
console.log('----------Required utility type example output-----------')


type requiredStudent = Required<StudentRequiredType>;

let studentR1: requiredStudent = {id: 1, name: 'dave', gpa: 4};
console.log(studentR1);


/**
 * 3. Readonly
 * This type makes all properties in a type read-only. Use it when we need to protect
 * our data from accidental change.
 */

interface StudentReadOnly {
    id: number;
    name: string;
}
console.log('-----------Readonly utility type example output-----------')

type readonlyStudent = Readonly<StudentReadOnly>;

let studentRO: readonlyStudent = {id: 101, name:" Grace"};
console.log(studentRO);

// studentRO.id = 102; --- ERROR- readonly property

/**
 * 4. Pick
 * This creates a type with only the specified properties. Use it when you only need
 * few fields from bigger type. 
 */

interface StudentPick {
    id: number;
    name: string;
    age: number;
    gender: string;
    gpa: number;
}
console.log('-----------Pick utility type example output-----------')
type studentPickType = Pick<StudentPick, "id" | "gpa">;

let studentPick1: studentPickType = {id: 101, gpa: 10};
console.log(studentPick1);

// let studentPick2: studentPickType = {name: "dave"}; --  Error name property does not exist


/**
 * 5. Record
 * This creates an object type with specific keys and valye types. we use it when we know all
 * the keys and want them to follow a pattern.
 */

type voteCount = Record<"Democrat" | "Republican" | "Independent", number>;
console.log('-----------Record utility type example output-----------')
let presidentalVote: voteCount = {
    Democrat: 70,
    Republican: 96,
    Independent: 2
}

console.log(presidentalVote);

