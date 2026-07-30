/**
 * Namespace is used to group related variables, functions, interfaces or
 * classes together under a single name.
 */

namespace StringUtils {
    export function toUpper(text: string): string {
        return text.toUpperCase();
    }

    export function toLower(text: string): string {
        return text.toLowerCase();
    }

    export class User {
        constructor(public name: string) {}
            greet() {
                console.log('Hello ', this.name);
            }
    }
}

console.log(StringUtils.toLower('AKSHAY'))
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