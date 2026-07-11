const weakMap = new WeakMap();
let obj = {};
weakMap.set(obj, 'firstObj');

console.log("Weak map --- ", weakMap.get(obj));
console.log(weakMap.has(obj));