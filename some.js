const apiresponse = [ 90, 123, 111, 716 ];
// SLA is 100
let result = apiresponse.some(time => time <= 100)
console.log(result)