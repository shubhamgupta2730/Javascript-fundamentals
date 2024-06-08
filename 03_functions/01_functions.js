
function sayName(){
  console.log("hello")
}

sayName();

// add 2 numbers 

//not returning anything
function addNumbers(num1, num2){
  console.log(num1+num2);  // 6 
}
const result = addNumbers(2,4);
console.log(result); //undefined


// returning result from function 
function addTwoNumbers(num1 , num2){
  let result = num1 + num2;
  return result;
}

const result2 = addTwoNumbers(2,4);
console.log(result2)


function loginUser(userName="hello"){
  return `${userName} just logged in`;
}

console.log(loginUser("shubham"))
console.log(loginUser())  // if no value of parameter is passed, then undefined is returned. 
//we can provide default value to arguments which will be taken by default if no value is passed.


