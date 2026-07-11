// Custom exception by class constructor extending Error class.
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = 'First Error test - '
    }
}

try {
    const num = 'a';
    if(isNaN(num)) {
        throw new CustomError('Num is not a number..!!');
    }
} catch(error) {
    console.error(error.message);
    console.error(error.name);
    console.error(error.stack);
}


// Function constructor inhereting Error class.
function checkIfNum(message = '') {
    this.message = message;
    this.name = "CheckIfNum";
}
checkIfNum.prototype = Error.prototype;

try {   
  const num = 'abc';
  if(isNaN(num)) throw new checkIfNum('Not a number..!!');
} catch(error) {
    console.error(error.message);
    console.error(error.name);
}


class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'Validation Error -->';
    }
}

function testException() {
    throw new ValidationError('Exception test..');
}

try {
    testException();
} catch(error) {
    console.error(error.message);
    console.error(error.name);
    console.error(error.stack);
}