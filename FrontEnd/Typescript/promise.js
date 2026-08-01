"use strict";
/**
 *
 * @returns promise string
 * Simple promise example
 */
function myAsyncFunction() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve(`The result is success and your operation result is SUCCESS..!!`);
            }
            else {
                const rejectCode = 404;
                const rejectMessage = `The result is failed and your operation result is ${rejectCode}`;
                reject(new Error(rejectMessage));
            }
        }, 3000);
    });
}
;
myAsyncFunction().
    then((result) => {
    console.log(result);
}).catch((error => {
    console.error(error);
}));
/**
 * Chaining promises
 *
 */
const promise1 = new Promise((resolve, reject) => {
    const functionOne = 'This is the first promise function.!!';
    setTimeout(() => {
        resolve(functionOne);
    }, 1000);
});
const promise2 = new Promise((resolve, reject) => {
    const functionTwo = 'This is the seond promise function.!!';
    if (!functionTwo) {
        reject(new Error('Error occured..!!'));
    }
    setTimeout(() => {
        resolve(functionTwo);
    });
});
promise1.then(result => {
    console.log('Result of promise 1 ---', result);
    return promise2;
}).then(result2 => {
    console.log('Result of promise 2 ---', result2);
}).catch(error => console.error(error));
