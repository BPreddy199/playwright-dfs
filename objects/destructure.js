 const  use  = {
    name: 'John',
    age: 30,        
    city: 'New York',
    address: {
        street: '123 Main St',              
        city: 'New York',
        state: 'NY'
    }
 }  
 // Destructuring an object
 const { name, age, city } = use;
 console.log(use);