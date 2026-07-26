"use strict";
// Numeric ENUMS
var level;
(function (level) {
    level[level["LOW"] = 0] = "LOW";
    level[level["MEDIUM"] = 1] = "MEDIUM";
    level[level["HIGH"] = 2] = "HIGH";
})(level || (level = {}));
console.log(level.LOW); // output - 0
console.log(level.MEDIUM); // output - 1
console.log(level.HIGH); // output - 2
let levelLowIndex = level.LOW; // using index to access the enum value
console.log(level[levelLowIndex]); // output - "LOW"
// ---------------------------------------------------
// String ENUMS
var direction;
(function (direction) {
    direction["UP"] = "UP";
    direction["DOWN"] = "DOWN";
    direction["LEFT"] = "LEFT";
    direction["RIGHT"] = "RIGHT";
})(direction || (direction = {}));
console.log(direction.UP); // output - "UP"
console.log(direction.DOWN); // output - "DOWN"
console.log(direction.LEFT); // output - "LEFT"
console.log(direction.RIGHT); // output - "RIGHT"
let dir = direction.UP;
console.log(dir); // output - "UP"
let downDir = direction.DOWN; // using index to access the enum value
// let downDir: direction = ''; // not assignable to type 'direction'
console.log(downDir); // output - "DOWN"
