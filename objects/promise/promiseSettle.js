//promise settle example where we have three promises and we want to know the result of all three promises whether they are fulfilled or rejected
function task1() {
    return new Promise((resolve, reject) => {
        const isTask1Successful = true; // Simulating task 1 status
        if (isTask1Successful) {
            resolve('Task 1 completed successfully');
        } else {
            reject('Task 1 failed');
        }
    });         
}
function task2() {
    return new Promise((resolve, reject) => {
        const isTask2Successful = false; // Simulating task 2 status
        if (isTask2Successful) {
            resolve('Task 2 completed successfully');
        } else {
            reject('Task 2 failed');
        }
    });         
}   
function task3() {
    return new Promise((resolve, reject) => {
        const isTask3Successful = true; // Simulating task 3 status
        if (isTask3Successful) {
            resolve('Task 3 completed successfully');
        } else {
            reject('Task 3 failed');
        }
    });
}
Promise.allSettled([task1(), task2(), task3()])
    .then((results) => {
        console.log('All tasks have settled:');     
        results.forEach((result, index) => {
            if (result.status === 'fulfilled') {
                console.log(`Task ${index + 1}: ${result.value}`);
            } else {
                console.log(`Task ${index + 1}: ${result.reason}`);
            }   
        });
    })
    .catch((error) => {
        console.error('Error:', error);
    }); 