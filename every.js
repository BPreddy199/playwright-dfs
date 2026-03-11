const apiresponse = [ 90, 88, 87, 76 ];
// SLA is 100
let result = apiresponse.every(time => time <= 100)
console.log(result)