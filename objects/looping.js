 const user = {
    name: 'John',
    age: 30,
    city: 'New York'
 };
 // Looping through an object
 for (const key in user) {
     console.log(key, user[key]);
 }