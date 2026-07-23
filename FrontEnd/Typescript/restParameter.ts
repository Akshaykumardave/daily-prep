function addConcat(...args: (number | string)[]): [number , string] {
    let sum: number = 0;
    let message: string = '';

    for(let arg of args) {
        if(typeof arg === 'number') {
            sum += arg;
        } else {
            message += arg;
        }
    }

    return [sum, message];
}

let [total, text]: [number, string] = addConcat(10, 20, 40, "Dave", 1, "paris");

console.log(total);
console.log(text);
