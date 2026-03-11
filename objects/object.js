 const user = {
    name: 'John',
    age: 30,
    city: 'New York'
 }


 // Key value pair : , name is key and John is value
 // value can be string or number or boolean or array or object
 const user1 = {
    name: 'John',
    age: 30,
    city: 'New York',
    address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY'
    }
 }
 //print the address of the user
 console.log(user1.address)
 console.log(user)

 //Objects are usefull in automation for storing locators 

 const  headerListOptions    = 
    {
           pizza : 'div[aria-label="Pizzas"]',  
    }
    // use object to store test data 
    const usernames = {
        john: 'John Doe',
        jane: 'Jane Smith'
    }

    // to store api response
    const apiResponse = {
        status: 200,    
        data: {
            id: 1,
            name: 'John Doe',
            email: 'john.doe@example.com'
        }
    }

    const account = {
        username: 'john_doe',
        balance: 1000,
        accountnumber: '1234567890'
    }

    console.log(account.username)
 
    if (account.balance > 500) {
        console.log("You have sufficient balance.");
    }
    else {
        console.log("You have insufficient balance.");
    }
// Another way fo creating objects in javascript 
const user2 = new Object();
user2.name = 'Jane';
user2.age = 205;
user2.city = 'Los Angeles';
console.log(user2)

// another way fo access object in  javascript
//bracket notation
console.log(user2['name']) 

