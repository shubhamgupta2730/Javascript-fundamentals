
//in below function, it will take only one parameter, ie first parameter 200.
function calculatePrice(num1){
  return num1
}

console.log(calculatePrice(200, 400, 500))

// so if we want that it will take all the inputs, that we pass, we have to use : 
//? Rest operator: 
function price(...num1){
  return num1;
}
console.log(price(200, 3000,400, 40004))
//it will take all the inputs and return a array of all the parameters. 


//! Passing object inside functions: 
const user = {
  username : "Shubham",
  price: 199
} 

function handleObject(anyObject){
  console.log(`username is : ${anyObject.username} and price is : ${anyObject.price}`)
}

// handleObject(user)

//we can also pass object directly: 
handleObject({
  username: "Shubham",
  price: 199,
})


//! passing array inside functions: 

const myArray = [200, 400, 500, 600]

function returnSecondValue(getarray){
  return getarray[1];
}

console.log(returnSecondValue(myArray))
//passing array directly inside parameters 
console.log(returnSecondValue([100, 200]))

