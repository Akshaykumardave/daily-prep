"use strict";
// Abstract class can not be instantiated directly, we can not create object from it.
// Abstract class are meant to be extended by other classes that provide implementation for their abstracct
// Abstract class can have both abstract and regular methods 
class ShapeClass {
    getDimensions() {
        console.log('The dimension is');
    }
}
class Shape {
    dimension;
    constructor(dimension) {
        this.dimension = dimension;
    }
}
class Square extends Shape {
    calculateArea() {
        return this.dimension * this.dimension;
    }
}
const square = new Square(5);
console.log("Area of square:", square.calculateArea());
