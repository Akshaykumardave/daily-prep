/**
 * Javascript promise is a good way to handle asynchronous operations.
 * It is used to find out if the asynchronous operation is successfully completed or not
 * 
 * It has 3 states
 * 1. Pending
 * 2. Fulfilled
 * 3. Rejected
 * 
 * A promise starts in a pending state. That means the process is not complete. 
 * If the operation is successful, the process ends in a fulfilled state. 
 * And, if an error occurs, the process ends in a rejected state.
 * 
 * The promise constructor takes a function as an argument. The function also accepts 2 functions resolve() and reject().
 * 
 */

const count = true;
let countValue = new Promise(function(resolve, reject) {
    if(count){
        resolve('There is a count value..!!')
    } else {
        reject('There is no count..!!');
    }
});

console.log(countValue);

/**
 * Promise chaining
 * 
 * When we have to handle more than one asynchronous task, one after another, for that we use promise chaining
 */

let countValueNew = new Promise(function(resolve, reject) {
    // resolve('Promise resolved..!!');
    reject('Promise rejected..!!')
});

countValueNew.then(function successvalue(result) {
    console.log(result);
}).then(function successvalue1() {
    console.log("we can call multiple functions this way..!!");
}).catch(function errorValue(result){
    console.log(result);
})