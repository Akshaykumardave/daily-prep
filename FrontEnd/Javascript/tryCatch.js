function exceptionHandling() {
    try {
        let val = 100/'a';
        console.log(values); // undeclared variable
    } catch (error) {
        console.log("An error occurred:", error.message);
    } finally {
        console.log("Execution completed.");
    }
}

// exceptionHandling();

function exceptionHandlingWithAsync() {
    // try {
        // await setTimeout(() => {
        //     let val = 100/'a';
        //     console.log(values); // undeclared variable
        // }, 3000);

        setTimeout(() => {
            try {
            let val = 100/'a';
            console.log(values); // undeclared variable
            }catch (error) {
                console.log("An error occurred:", error.message);
            }
        }, 3000);
    // } catch (error) {
    //     console.log("An error occurred:", error.message);
    // }
}

// exceptionHandlingWithAsync();


const number = 5;
try {
    throw new Error("This is a custom error message.");
} catch (error) {
    console.log('An error caught..');
    if(number + 8 > 10){
        console.log("Error message:",error.message);
    } else {
        throw new Error("This is a greater than 10 error message.");
    }
    console.log("An error occurred:", error.message);
}