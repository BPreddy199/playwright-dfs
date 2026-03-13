// awiat try and catch example 
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Data fetched:', data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }   
}
fetchData();

async function processTransfer(fromaccount, toaccount, amount ) {
    try {
        if (amount <= 0) {
            throw new Error('Amount must be greater than zero');
        }       
        // Simulating transfer process
        console.log(`Transferring ${amount} from ${fromaccount} to ${toaccount}...`);
    ;
    } catch (error) {
        console.error('Error processing transfer:', error);
    }   
    finally {
        console.log('Transfer process ended');
    }   
}