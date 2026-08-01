/**
 * 
 * @returns promise string
 * Simple promise example
 */

function myAsyncFunction(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        setTimeout(() => {
            const success = true;

            if(success){
                resolve(`The result is success and your operation result is SUCCESS..!!`)
            } else {
                const rejectCode: number = 404;
                const rejectMessage: string = `The result is failed and your operation result is ${rejectCode}`;
                reject(new Error(rejectMessage));
            }
        }, 3000);
    }); 
};

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

const promise1: Promise<string> = new Promise((resolve, reject) => {
    const functionOne: string = 'This is the first promise function.!!'
    setTimeout(() => {
        resolve(functionOne);
    }, 1000);
})

const promise2: Promise<string> = new Promise((resolve, reject) => {
    const functionTwo: string = 'This is the seond promise function.!!';

    if(!functionTwo) {
        reject(new Error('Error occured..!!'));
    }

    setTimeout(() => {
        resolve(functionTwo);
    })
});


promise1.then(result => {
    console.log('Result of promise 1 ---',result);
    return promise2;
}).then(result2 => {
    console.log('Result of promise 2 ---', result2);    
}).catch(error => console.error(error));