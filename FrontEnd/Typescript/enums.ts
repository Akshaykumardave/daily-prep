// Numeric ENUMS
enum level {
    LOW,
    MEDIUM,
    HIGH
}

console.log(level.LOW); // output - 0
console.log(level.MEDIUM); // output - 1
console.log(level.HIGH); // output - 2

let levelLowIndex: number = level.LOW; // using index to access the enum value
console.log(level[levelLowIndex]); // output - "LOW"

// ---------------------------------------------------

// String ENUMS
enum direction {
    UP = "UP",
    DOWN = "DOWN",
    LEFT = "LEFT",
    RIGHT = "RIGHT"
}

console.log(direction.UP); // output - "UP"
console.log(direction.DOWN); // output - "DOWN"
console.log(direction.LEFT); // output - "LEFT"
console.log(direction.RIGHT); // output - "RIGHT"


let dir: direction = direction.UP;
console.log(dir); // output - "UP"

let downDir: direction = direction.DOWN; // using index to access the enum value
// let downDir: direction = ''; // not assignable to type 'direction'
console.log(downDir); // output - "DOWN"