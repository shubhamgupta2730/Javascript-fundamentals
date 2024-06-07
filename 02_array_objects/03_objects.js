// Object literals

const mySym = Symbol("key1")
//to use symbol inside object, use [] brackets and also at the time of acccessing use [] methods.

const user = {
  name: "Shubham",
  "full name": "Shubham Gupta",
  [mySym]: "myKey1",
  age: 20,
  location: "Jaipur",
  isLoggedIn: false,
  email: "email@gmail.com",

}
console.log(user.email)
//console.log(user.full name); not possible to access keys with spaces in between from this  method, so we use another method : ->

console.log(user["email"])
console.log(user["full name"])
console.log(user[mySym])
console.log(typeof user[mySym])

//to change value of object: 

user.email = "email222@gmail.com"
console.log(user["email"])
//! Object.freeze() : 
// it will freeze the object, and after it, we cannot make changes in the object.
//Object.freeze(user); 
user.email = "email@fmail.com"; // no changes 
console.log(user)


//! Adding function inside object: 

user.greetings = function(){
  console.log("Hello js user")
}
//console.log(user.greetings) 
console.log(user.greetings())

user.greetings2 = function(){
  console.log(`Hello js user ${this.name}`)
}
console.log(user.greetings2())


