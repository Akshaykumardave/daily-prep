"use strict";
/**
 * Namespace is used to group related variables, functions, interfaces or
 * classes together under a single name.
 */
var StringUtils;
(function (StringUtils) {
    function toUpper(text) {
        return text.toUpperCase();
    }
    StringUtils.toUpper = toUpper;
    function toLower(text) {
        return text.toLowerCase();
    }
    StringUtils.toLower = toLower;
    class User {
        name;
        constructor(name) {
            this.name = name;
        }
        greet() {
            console.log('Hello ', this.name);
        }
    }
    StringUtils.User = User;
})(StringUtils || (StringUtils = {}));
console.log(StringUtils.toLower('AKSHAY'));
console.log(StringUtils.toUpper('akshay'));
const user = new StringUtils.User('Dave');
user.greet();
// output
/**
 * akshay
AKSHAY
Hello  Dave
undefined
 *
 *
 */ 
