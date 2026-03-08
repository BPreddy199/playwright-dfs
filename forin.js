const userdetails = {
    name: "bhanu",
    age: 30,
    city: "hyderabad"
}
for (const eachuserdetail in userdetails) {
    //console.log(eachuserdetail + ": " + userdetails[eachuserdetail]);
    //console.log(`${eachuserdetail}: ${userdetails[eachuserdetail]}`);
    //console.log("eachuserdetail: " + eachuserdetail)
    console.log("userdetails[eachuserdetail]: " + userdetails[eachuserdetail])
}