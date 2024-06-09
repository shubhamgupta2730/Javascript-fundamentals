
// forEach does not return any value , it only prints the values inside loop.

//filter, map, reduce returns the values. 

//? filter method in array: 

const myNum = [1,2,3,4,5,6,7,8];

const result = myNum.filter( (num)=>num>4);
//or 
const result2 = myNum.filter( (num)=>{
  return num>4
})
console.log(result)

//using forEach for above same output as filter methods.
const result3 = [];
 myNum.forEach( (num)=>{
  if(num>4){
    result3.push(num)
  }
})
console.log(result3)


//?  map method: 

const arr5 = [1,2,3,4,5,6,7,8];
const result5 = arr5.map( (num)=>num+10)
console.log(result5)


//? chaining: chaining the methods. 

const result6 = arr5
  .map( (num)=>num*10)
  .map( (num)=>num +1)
  .filter( (num)=>num>=50)

console.log(result6)


//? Reduce method: 

// arr.reduce( (accumulator, currentValue), initial value)
//initial value is taken by accumulator at the starting. 
 //it has accumulator which stores the output of last value. 
const arr6 = [1,2,3,4,5,6,7];
 const myTotal = arr6.reduce(function(acc, currval){
  console.log(`${acc}, ${currval}`)
  return acc+currval
 }, 0)
 console.log(myTotal)

 //arrow function: 
 const myTotal2 = arr6.reduce( (acc, curr)=>acc+curr, 0)
