/**
 * the `never` type represents value that never occurs. It is used to denots functions that never returns a value, typically 
 * because they throw an exception or terminate the program. It is also used to represent the type of values that are impossible to occur.
 * 
 * we can use the `never` type in the following scenarios:
 * 1. Functions that throw an error or exception.
 * 2. Functions that have infinite loops and never return.
 * 3. Switch statements that have exhaustive checks and never reach a default case.
 */

function crash(): never {
    throw new Error('Something went wrong.!!');
}

crash(); // output - Error: Something went wrong.!!