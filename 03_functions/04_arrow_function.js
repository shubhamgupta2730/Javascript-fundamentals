//? this keyword: 
//this keyword refers to the current context. 

const user = {
  username: "Shubham",
  price: 999,
  welcomeMessage: function(){
    console.log(`${this.username} , welcome to website`)
    console.log(this)
  }
}

user.welcomeMessage()
user.username = "js"
user.welcomeMessage()


console.log(this)  // {}
//it refers to the global object.
//when we execute this in browser, then it will refer to window object which is global object for browser. 

function one(){
  let username = "shubham"
  console.log(this)
  console.log(this.username)  //undefined 
  //we cant access variables inside function using this keyword, it will give output as undefined, 
}
one()


const  two = ()  =>{
  let username = "shubham"
  console.log(this)  // {}
  console.log(this.username)
}
two()

//? Arrow function

const addTwo = (num1, num2)=>{
  return num1 + num2;
}
// if using curly braces then, return keyword is necessary to write. 

console.log(addTwo(2,3))

//another method: 
const addThree = (num1, num2) => (num1 + num2);
//but if not using curly braces, and only using the values or the values with paranthesis then, return keyword is not necessary, it is done when we are returning only one line of values.
console.log(addThree(1,2))

//returning object from arrow function: 
const addFour = (num1, num2) => ({username : "shubham"})
// keep object inside pranthsis for returning. 
