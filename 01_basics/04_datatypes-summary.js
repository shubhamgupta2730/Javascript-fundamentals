//data is categorized into 2 types: 
// primitive and non primitive

//the difference is how they stored in memory and how  they can be accessed, such as call by value, or call by reference.

//! Primitive:   (call by value) 
// String, Number , Boolean, null, undefined, Symbol, BigInt

//! Non-primitive (call by reference)
//array, object, function

//? js is dynamically typed language, because datatype is defined at run time.

//array
const numbers = [1,2,3,4,5,6]

//object
let myObj = {
  name: "shubham",
  age: 22,
}

//function
const myFunction = function(){
  console.log("Hello World");
}


console.log(typeof myFunction);  //function
console.log(typeof myObj);  //object
console.log(typeof(numbers));  //object

//!typeof: array is object
//!typeof: null is object
