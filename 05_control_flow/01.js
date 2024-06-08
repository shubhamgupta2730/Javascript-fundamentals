
//control flow: 
/* if else
switch
ternary operator
*/

//falsy values: 
//false, 0, -0, BigInt 0n, "", null, undefined, Nan

//Truthy values: 
// true, 1, "0", " " , 'false', [], {}, function(){}
//any value insie string or object is truthy value.

//! Nullish Collescense operator: 

let val1;
val1 = 5??10 //output: 5
let val2
val2 = null??10 //output: 10
val3 = undefined ?? 20 //output: 20

