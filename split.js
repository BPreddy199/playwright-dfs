const order = "order #12345  has been shipped"
const words = order.split("#")
console.log(words)
console.log(words[1])
console.log(words[1].split(" "))
let orderid = words[1].split(" ")[0]
console.log(orderid)
