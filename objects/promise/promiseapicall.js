// promise example with deplayed api calls 
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { id: 1, name: 'John Doe' };
            resolve(data);
        }, 2000);
    });     
}
fetchData()
    .then((data) => {
        console.log('Data fetched:', data); // Output: Data fetched: { id: 1, name: 'John Doe' }
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });