// async function f() {
//     console.log('Async function..!!');
//     return Promise.resolve(1);
// }
// f().then((result) => {
//     console.log(result)
// });

/**
 * 
 * async await
 */

let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        reject('Promise is not resolved..!!');
    }, 3000);
});

async function asyncFunc(params) {
    let result = promise.then(result => console.log(result)).catch(error => console.error('Error---###' +error));
    // console.log(result);
    console.log('Hello promise is completed..!!');
}

asyncFunc();