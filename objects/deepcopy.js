const fruits = {
    name: 'Apple',
    color: 'Red',       
    price: 1.99,
    details: {
        origin: 'USA',      
        season: 'Fall'
    }
};
// Deep copying an object using JSON methods
const deepCopiedFruits = JSON.parse(JSON.stringify(fruits));
console.log(deepCopiedFruits);