"use strict";
/**
 * the `never` type represents value that never occurs. It is used to denots functions that never returns a value, typically
 * because they throw an exception or terminate the program. It is also used to represent the type of values that are impossible to occur.
 */
function crash() {
    throw new Error('Something went wrong.!!');
}
crash(); // output - Error: Something went wrong.!!
