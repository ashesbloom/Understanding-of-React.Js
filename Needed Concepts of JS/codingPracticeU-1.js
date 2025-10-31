//? unit 1 - Spread and Rest Operators
/* 
combine two arrays using spread operator
copy an array and add new elements to 
Merge two objects
use spread to convert string "hello" to array of characters
what happens when you spread undefined or null?
*/

//combine two arrays using spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];
console.log(combinedArray); // [1, 2, 3, 4, 5, 6]

//copy an array and add new elements to
const originalArray = ['a', 'b', 'c'];
const newArray = [...originalArray, 'd', 'e'];
console.log(newArray); // ['a', 'b', 'c', 'd', 'e']

//Merge two objects
const obj1 = { x: 1, y: 2 };
const obj2 = { y: 3, z: 4 };
const mergedObject = { ...obj1, ...obj2 };
console.log(mergedObject); // { x: 1, y: 3, z: 4 }

//use spread to convert string "hello" to array of characters
const str = "hello";
const charArray = [...str]; // spread operator converts string to array of characters
// alternatively, you can use Array.from(str)
const charArrayAlt = Array.from(str);
console.log(charArray); // ['h', 'e', 'l', 'l', 'o']

//what happens when you spread undefined or null?
//* Spreading undefined or null will throw a TypeError
try {
    const arrFromUndefined = [...undefined];
} catch (e) {
    console.log(e.message); // "undefined is not iterable (cannot read property Symbol(Symbol.iterator))"
}


//? unit 1 - ES6 Modules
/* 
create a file "mathUtils.js" and export functions for add and multiply, then import and use them in another file (main.js)
create a default export for a function with greet(name) and import it with any name of your choice.
Export a constant pi = 3.14 and import it in another file.
Demonstrate how to use both default and named exports in one module (same file).
*/



