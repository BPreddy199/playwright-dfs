let price = "\n $1,250.50 ";
let cleanPrice = price.trim().replace("$", "").replace(",", "");
let numberPrice = parseFloat(cleanPrice);
console.log(numberPrice);