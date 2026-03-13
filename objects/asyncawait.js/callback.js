// simple pizza ordering analogy for callback functions
function orderPizza(pizzaType, callback) {
    let result = `Your ${pizzaType} pizza is ready!`;
    callback(result);
}
 function displayResult(result) {
    console.log(result);
}
 // ordering a pizza and providing a callback function to handle the result
orderPizza('pepperoni', displayResult);
//output: Your pepperoni pizza is ready!

// callback hell example
function orderPizza(pizzaType, callback) {
    setTimeout(() => {      
        let result = `Your ${pizzaType} pizza is ready!`;
        callback(result);
    }, 2000);
}
function displayResult(result) {
    console.log(result);
}   
orderPizza('pepperoni', (result) => {
    console.log(result);
    orderPizza('veggie', (result) => {
        console.log(result);    
        orderPizza('cheese', (result) => {
            console.log(result);
        });
    });
});
//output: 
// Your pepperoni pizza is ready!
// Your veggie pizza is ready!
// Your cheese pizza is ready!