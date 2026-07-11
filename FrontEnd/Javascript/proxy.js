/**
 * Proxies (proxy object) are used to wrap an object and redefine various operations into the object such as reading, 
 * insertion, validation, etc. Proxy allows you to add custom behavior to an object or a function
 */

let student1 = {
    age: 24,
    name: 'Dave'
};

const handler = {
    get: function(obj, prop) {
        return obj[prop] ? obj[prop] : 'property does not exists..!!'
    }
}

const px = new Proxy(student1, handler);
console.log(px.name);
console.log(px.age);
console.log(px.class);


// Proxy provides two handler methods get() and set().

// Use for validations
let studentNew1 = {
    name: 'Jack',
    age: 25
};

const handlerNew = {
    get(obj, prop) {
        if(prop == 'name') {
            return obj[prop];
        }else {
            return 'Not allowed..!!'
        }
    }
};

const pxy = new Proxy(studentNew1, handlerNew);
console.log(pxy.name);
console.log(pxy.age);

// Read only

const handlderReadOnly = {
    set: function(obj, prop, value) {
        if(obj[prop]){
            console.log('Read only..!!')
        }
    }
}

const pxyReadOnly = new Proxy(studentNew1, handlderReadOnly);
console.log(pxyReadOnly.name);// read is allowed

pxyReadOnly.name = 'Dave'; // not allowed
console.log(pxyReadOnly.name); // Jack - Read only