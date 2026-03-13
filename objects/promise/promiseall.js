// promise.all example where sending three people at same time to pharmacy super market and bank and i will wait for all three should be complted if faile then fail  dont use sttimeout make it simple 
function goToPharmacy() {
    return new Promise((resolve, reject) => {
        const isPharmacyOpen = true; // Simulating pharmacy status
        if (isPharmacyOpen) {
            resolve('Pharmacy: Medicine bought');
        } else {
            reject('Pharmacy: Pharmacy is closed');
        }
    });             
}
function goToSuperMarket() {
    return new Promise((resolve, reject) => {
        const isSuperMarketOpen = true; // Simulating supermarket status
        if (isSuperMarketOpen) {
            resolve('Super Market: Groceries bought');
        } else {
            reject('Super Market: Supermarket is closed');
        }
    });             
}   
function goToBank() {
    return new Promise((resolve, reject) => {
        const isBankOpen = true; // Simulating bank status
        if (isBankOpen) {
            resolve('Bank: Money withdrawn');   
        } else {
            reject('Bank: Bank is closed');
        }   
    });
}
Promise.all([goToPharmacy(), goToSuperMarket(), goToBank()])
    .then((results) => {
        console.log('All tasks completed successfully:');
        results.forEach(result => console.log(result));
    })
    .catch((error) => {
        console.error('One or more tasks failed:', error);
    });