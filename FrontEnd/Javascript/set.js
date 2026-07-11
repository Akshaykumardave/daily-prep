const setVal = new Set([1,2,3,4,1,11,12,13]);
setVal.add(1);
setVal.add(2);
setVal.add(3);
setVal.add(4);
setVal.add(1);

console.log(setVal); // Set(7) { 1, 2, 3, 4, 11, 12, 13 }

// Returning an iterator using values()
console.log(setVal.values());

// Returning an iterator using keys()
console.log(setVal.keys());

console.log(setVal.entries().next());

for(let v of setVal) {
    console.log(v);
}

//Removing perticular element
setVal.delete(1);
console.log(setVal);


// Removing all elements
setVal.clear();
console.log(setVal);