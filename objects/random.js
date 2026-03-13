//arrow function
const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//simple function 
function random2(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//let const 
let a = 5;      
const b = 10;

//template literals
const name = 'John';
const greeting = `Hello, ${name}!`;
console.log(greeting);

//destructuring
const person = {
    name: 'Alice',  
    age: 25,
    city: 'New York'
};
const { name: personName, age, city } = person;
console.log(personName, age, city); 

//how to import function from other file in javascript
import { random, random2 } from './random.js';
console.log(random(1, 100));
console.log(random2(1, 100));

//

