// Javascript Iterables -  data structures that have the Symbol.iterator method are called iterables. Eg. Arrays, Strings, Sets etc.
// Javascript Iterators - An iterator is an object that is returned by the Symbol.iterator() method.

const arr = [1, 2, 3];
const arrIterator = arr[Symbol.iterator]();
console.log(arrIterator); // Array Iterator

for(let n of arr[Symbol.iterator]()) {
    console.log(n);
}


const str = 'Hello';
const strIterator = str[Symbol.iterator]();
console.log(strIterator); // StringIterator

for(let s of str[Symbol.iterator]()) {
    console.log(s);
}

console.log(strIterator.next());
