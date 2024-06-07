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


//? Memory: 

// Stack(Primitive), Heap(Non-primitive)

let myName = "Shubham"
let otherName = myName

otherName = "JS"
console.log(myName); //shubham
console.log(otherName); //JS

//copy of myName is done in otherName, so on changing otherName, there will be no effect on myName.(stack memory )


let user = {
  email: "user@gmail.com",
  id: 1,
}

let otherUser = user;

otherUser.id= 2;

console.log(user.id);  //2
console.log(otherUser.id); //2

// this is call by reference, so when we change in otherUser object, which is referencing the user object, the change will also be affect in user object. (non primitive datatype).(Heap memory)

