// Using a generator, we can stop the execution of a function from anywhere inside the function
// and continue executing code from halted position.

function* genertorFunc() { // we can also write function *generatorFunc()
    console.log('1. code before first yield');
    yield 100;

    console.log('2. code before second yield');
    yield 200;
}

const generator = genertorFunc();
console.log(generator.next());
console.log(generator.next());