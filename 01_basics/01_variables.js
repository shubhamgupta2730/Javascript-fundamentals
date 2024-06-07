const accountId = 144553
let accountEmail = "email@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"  //string type
let accountState;  //undefined

// accountId=2  //not allowed to change const varaible.

accountEmail = "email1122@gmail.com"
accountPassword = "23232"
accountCity = "kota";
// console.log(accountId);
console.log(typeof(accountCity))


console.table([accountId, accountEmail, accountPassword,  accountCity, accountState])

//prefer not to use var, because of there is no block scope supported in var. 

//so use let and const. 