let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(console.log('Promise resolved..!!')), 2000);
});

console.log(promise)