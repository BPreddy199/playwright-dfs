async function accountbalance() {
    return 1000;
}

async function getaccountbalance() {
    let balance = await accountbalance();
    console.log(balance);
}
getaccountbalance(); // Output: 1000

// sample above exmaple using then and catch 

function accountbalance() {
    return new Promise((resolve, reject) => {
        resolve(1000);
    }); 
}

function getaccountbalance() {
    accountbalance()
        .then((balance) => {
            console.log(balance); // Output: 1000
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}
getaccountbalance(); // Output: 1000

// what is difference between async await and promise?
// async await is a syntactic sugar over promises. It allows you to write asynchronous code in a more synchronous and readable manner. 
// With async await, you can use the await keyword to wait for a
//  promise to resolve before moving on to the next line of code. 
// This makes it easier to read and understand the flow of asynchronous 
// code. On the other hand, promises use .then() and .catch() methods
//  to handle the resolved and rejected states of a promise, 
// which can lead to nested callbacks and less readable code. Overall, 
// async await provides a cleaner and more intuitive way to work with asynchronous operations compared to promises.    
