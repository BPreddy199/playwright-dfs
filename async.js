async function main() {
    console.log("Starting...");
    const result = await sum(10, 20);
    console.log("Result:", result);
    console.log("Finished.");
}
function sum (a, b) {
    return a + b
}

main();