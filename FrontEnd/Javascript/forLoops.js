const students = ['Ram', 'Sita', 'Laxman'];

for(let s of students) {
    console.log(s);
}

const obj = {
    1: 'a',
    2: 'b',
    3: 'c'
}

for(let o in obj) {
    console.log(o);
}


const map = new Map([
    [1, 'a'],
    [2, 'b']
]);

for(let o of map.entries()) {
    console.log(o);
}