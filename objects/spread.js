 const user =  {
    name: 'John',
    age: 30,
    city: 'New York'  , 
     name: 'John',
    age: 30,
    city: 'New York',
     name: 'John',
    age: 30,
    city: 'New York'  , 
     name: 'John',
    age: 30,
    city: 'New York',
     name: 'John',
    age: 30,
    city: 'New York'  , 
     name: 'John',
    age: 30,
    city: 'New York',
     name: 'John',
    age: 30,
    city: 'New York'  , 
     name: 'John',
    age: 30,
    city: 'New York'           
 }
    // Using spread operator to create a new object with additional properties  
    const newUser = { ...user, email: 'john@example.com' };
    console.log(newUser);