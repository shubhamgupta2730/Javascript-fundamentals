let score  = 33
let score2 = "33"
let score3 = "33abc"

console.log(typeof score);   //number
console.log(typeof(score2)); //string

let valueInNumber = Number(score2) //string to number conversion
let valueInNumber2 = Number(score3)
console.log(typeof valueInNumber); 
console.log(typeof valueInNumber2);

console.log(valueInNumber);  //33
console.log(valueInNumber2); //NaN

//"33" => 33
//"33abc" => NaN

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn) //number to boolean
console.log(booleanIsLoggedIn);  //true

//1=> true
//0 => false
//"" => false  //empty string 
//"abc" => true

let number1 = 33
let stringNumber  = String(number1)  //number to string
console.log(typeof stringNumber);  //string
