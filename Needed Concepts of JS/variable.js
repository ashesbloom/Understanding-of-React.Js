//? Variable Declaration: var, let, const

//? var is function-scoped and can be redeclared and updated
console.log(name); // undefined
var name = "First";
var name = "Last"; // redeclaration is allowed as var is the data-type
console.log(name); // should print "Last"

//? Block-scoped variables: let and const
// let and const do not allow redeclaration
let age = 25;
console.log(age); // should print 25
//! let age = 30; 
// This will throw an error as redeclaration is not allowed with let (within the same block scope)
age = 30; // reassignment is allowed with let but not redeclaration
console.log(age); // should print 30

// const is used when the value should not be reassigned
const pi = 3.14;
console.log(pi); // should print 3.14
//! pi = 3.14159; 
// This will throw an error as reassignment & redeclaration is not allowed with const
//! const pi;
// const must be initialized during declaration 
//? this is the difference between let and const in let you can declare and initialize later but in const you have to do both at the same time


