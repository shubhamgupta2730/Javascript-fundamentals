//IIFE: Immediately Invoked Function Expression

//()()
//function is wrapped inside paranthesis, and called just after declaration.

//IIFEs are used to create a new scope and avoid polluting the global namespace. This is particularly useful in module patterns and when you want to encapsulate code to prevent variable leakage.

(function one(){
  console.log("hello IIFE")
})(); //semicolon is important with IIFE, if we write more than one IIFE, so that compiler can know that one IIFE has completed execution here. 

//arrow function
( (name) =>{
  console.log(`${name}`);
})('Shubham');