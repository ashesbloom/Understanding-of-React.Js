//Write a function that accepts any number of arguments and returns their sum.

function addition(...args) {
    return args.reduce((prv, curr)=> prv + curr, 0); 
    // reduce is the method which is used to iterate the array and perform some operation on each element of the array.
    //prv and curr are the parameters of the callback function of reduce method.
    //reduce supports two parameters initialValue and callback function. The initialValue is optional. 
    //callback function takes four parameters accumulator, currentValue, currentIndex, array.
    //accumulator is the value that is returned by the last execution of the callback function. (previous value)
}
console.log(addition(2, 3)); // 5
console.log(addition(1, 2, 3, 4, 5)); // 15

// Destructure the array and collect the remaining elements.
const fruits = ['apple', 'banana', 'orange', 'mango' ];
const [first, second, ...rest] = fruits; 
// rest is used to collect the remaining elements of the array.

console.log(first); // apple
console.log(second); // banana
console.log(rest); // ['orange', 'mango']

//Use of rest operator in object destructuring
const user = {
  name: 'Mayank',
  age: 20,
  city: 'Phagwara',
  country: 'India'
};
//! const { name, ...rest } = user;  // we can't use rest in the same scope block
{
    const { name, ...rest } = user;
    console.log(name); // 'Mayank'
    console.log(rest); // { age: 20, city: 'Phagwara', country: 'India' }
}