const pizzaType     = {
    name: 'Pepperoni',
    size: 'Large',
    price: 15.99,
    toppings: ['Pepperoni', 'Cheese', 'Tomato Sauce']
};  
// Deleting a property from the pizzaType object
delete pizzaType.price;
console.log(pizzaType);