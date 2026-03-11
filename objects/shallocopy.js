const pizzanames = {
    name: 'Pepperoni',
    size: 'Large',              
    price: 15.99,
    toppings: ['Pepperoni', 'Cheese', 'Tomato Sauce']
};
// Using spread operator to create a new object with additional properties
const bhanufavpizza = { ...pizzanames, calories: 300 };
console.log(bhanufavpizza);