
//global scope

//? Scope {}

let a = 10
const b = 20
var c = 30
console.log("before changes: ")
console.log(a)
console.log(b)
console.log(c)
if (true) {
  //block scope
  a = 20
  const b = 300
  c = 300
  console.log("Inner scope: ")
  console.log(a)
  console.log(b)
  console.log(c)
}

console.log("outer scope: ")
console.log(a)
console.log(b)
console.log(c)


//! nested scope: 

function one() {
  const username = "shubham"

  function two() {
    const website = "youtube"
    console.log(username)
    //we can access the variables of parent function inside the child function. 
  }
  //console.log(website)
  //it will give error, because we cant access the variables outside the scope of inner function
  two()

}

one()

if(true){
  const username = "Shubham"
  if(username === "shubham"){
    const website = " youtube"
    console.log(username + website)
  }
 // console.log(website)  //cannot be accessed
}
//console.log(username) //cannot be accessed 


//++++++++++++++++++++++++++Important: ++++++++++++++++++++//

//* HOISTING: 

//regular function
console.log(addOne(5))
function addOne(num){
  return num+1
}

//regular function: we can call the function before declaration, because it supports HOisting concept. 



//?function expression OR anonymous function
//addTwo(5)  //cannot access 
const addTwo = function(num){
  return num+2;
}
//but we cannot access function expression, before the declaration, so this function does not support HOisting concept.
