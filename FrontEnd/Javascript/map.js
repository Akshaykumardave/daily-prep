const implMap = new Map();
implMap.set(1, 'a');
implMap.set(2, 'b');

console.log(implMap);

// Iterating over map using for..of
for(let [k, v] of implMap){
    console.log(k + '---' + v)
}

// Iterating over map using forEach
implMap.forEach((v, k) => {
    console.log(k + '----' + v);
})

// Iterating over map with entries()
for(let element of implMap.entries()) {
    console.log(element[0] + ' ---> ' + element[1]);
}

// getting all keys
console.log(implMap.keys());

//getting all values
console.log(implMap.values());

// deleting an element from map, removed and returns true else false
implMap.delete(1);
console.log(implMap);

// deleting all values from map
implMap.clear();
console.log(implMap);