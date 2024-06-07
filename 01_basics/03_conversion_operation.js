let score  = 33
let score2 = "33"
let score3 = "33abc"

//console.log(typeof score);   //number
//console.log(typeof(score2)); //string

let valueInNumber = Number(score2) //string to number conversion
let valueInNumber2 = Number(score3)
//console.log(typeof valueInNumber); 
//console.log(typeof valueInNumber2);

//console.log(valueInNumber);  //33
//console.log(valueInNumber2); //NaN

//"33" => 33
//"33abc" => NaN

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn) //number to boolean
//console.log(booleanIsLoggedIn);  //true

//1=> true
//0 => false
//"" => false  //empty string 
//"abc" => true

let number1 = 33
let stringNumber  = String(number1)  //number to string
//console.log(typeof stringNumber);  //string


// ********** Operations *************

let value = 3
let negValue = -value
console.log(negValue);

//basic string addition
let str1 = "hello"
let str2 = " shubham"
let str3 = str1 + str2
console.log(str3); 

console.log("1" + 2);  //12
console.log(1+ "2");  //12
console.log("1" + 2 + 2);  //122
console.log(1+2+"2");  //32
console.log(+true);  //1
console.log(+"");  //0
let num1, num2, num3
num1 = num2 =num3 = 2+2

let gameCounter = 100
gameCounter++ 
console.log(gameCounter); //101


