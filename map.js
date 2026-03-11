let array = [1,2,3,4,5];
console.log(array)
console.log(array[0])
console.log(array[4])
let doublearray = array.map(num => num*2)
console.log(doublearray)
console.log(array)
const apiResponse = [
    {name: "bhanu", age: 30},
    {name: "prasad", age: 31},]
const names = apiResponse.map(user => user.name)
console.log(names)