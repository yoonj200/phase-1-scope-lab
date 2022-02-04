// Write your solution in this file!

//declare customerName to be bob in global scope
// 1) returns the customerName
var customerName = `bob`;

//upperCaseCustomerName()
//2) modifies the customerName variable
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return customerName;
}

//setBestCustomer()
//3) setBestCustomer
function setBestCustomer() {
    bestCustomer = `not bob`;
    return bestCustomer;
}

//overwriteBestCustomer()
//4) overwrites the best customer
function overwriteBestCustomer() {
    bestCustomer = `maybe bob`;
}

//changeLeastFavoriteCustomer()
//5) unsuccessfully tries to reassign the least favorite customer
const leastFavoriteCustomer = `sometimes bob`;

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = `definitely bob`;    
}
