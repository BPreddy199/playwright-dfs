// what are promises in javascript?// A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows you to write asynchronous code in a more synchronous and readable manner. A promise can be in one of three states: pending, fulfilled, or rejected. You can use the .then() method to handle the fulfilled state and the .catch() method to handle the rejected state. Promises are commonly used for handling asynchronous operations such as API calls, file reading, and timers.

// example of a promise     
//creatr promisewhich will take  function with two paramerts 
// resolve call this when success 
//reject call when failed 
const loginPromise = new Promise((resolve, reject) => {
        let isLoggedIn = true;  
        if (isLoggedIn === true) {
            resolve('Login successful!');
        } else {
            reject('Login failed. Please try again.');
        }   
    });

// .then() and catch method to handle the result of the promise
loginPromise
    .then((message) => {
        console.log(message); // Output: Login successful!      
    })
    .catch((error) => {
        console.error(error); // Output: Login failed. Please try again.
    }); 
        