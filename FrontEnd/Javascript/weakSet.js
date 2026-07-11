const weakSet = new WeakSet();
let obj = {
    1:'a',
    2: 'b',
    3: 'c'
};

let obj2 = {
    1:'a',
    2: 'b',
    3: 'c'
};

weakSet.add(obj);
weakSet.add(obj2);

console.log(weakSet.has(obj)); // true
console.log(weakSet.has(obj2)); // true

// WeakSet are not iteratable