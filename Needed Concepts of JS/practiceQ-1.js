//Extract the first and second elements from the array 
const colours = ['red', 'green', 'blue', 'yellow']
const [f,s] = colours
console.log(f,s) //red green

//Given the object, change age
const per = {name: 'alice', age: 25, city: 'delhi'};
console.log(per.age) //25
per.age = 30;
console.log(per.age) //30

//Skip the fist middle elements and extract the last element
const num = [10,20,30,40,50];
var last = num[num.length - 1];
console.log(last) //50
//or using destructuring
last = [,,,,l] = num; //,,,, is used to skip the first four elements
last = l;
console.log(last) //50

//Rename and assign default value
const car = {brand: 'Tesla'};
console.log(car.brand) //Tesla
car.brand = 'BMW'; //rename brand
console.log(car.brand) //BMW

//Nested destructuring
const user = {id: 1,info: {name: 'Bob', address: {city: 'NY', zip: 10001}}};
const name = user.info.name;
const city = user.info.address.city;
console.log(name, city) //Bob NY

