//js Execution context

//js is single threaded.
//It has global execution context.


// It has 2 phases: 
//1. Memory creation phase: In this phase, all the variables are just alloted memory and nothing is executed. 
//all the variables are undefined in this phase.
//all the functions are defined.


//2. Execution Phase: In this phase actual execution of code is done. 

//example: 

let val1 = 10
let val2 = 20
function addNum(num1, num2) {
  let total = num1 + num2
  return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)

//! Execution context: 

/* 1. global execution: this keyword(window for browser)

2. Memory phase: 
  val1->undefined
  val2->undefined
  addNum->definition
  result1->undefined
  result2->undefined

3. Execution phase: 
  val1 ->10
  val2-> 20
  addNum->new variable environment + execution thread
          1. Memory phase: 

              val1->undefined
              val2->undefined
              total->undefined

          2. execution phase: 
              num1->10
              num2->20
              total->30
              now total will return to global execution phase.
              and this phase of function is deleted.
    
  new variable env.+ execution thread: 
  memory phase
  execution phase.
*/

//? Call Stack (last in first out)

// The call stack in JavaScript is a mechanism for managing the execution context of functions. It operates on a Last In, First Out (LIFO) principle, meaning the last function called is the first to be completed.





