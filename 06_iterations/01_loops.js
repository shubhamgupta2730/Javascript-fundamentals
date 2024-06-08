// for of loop :
//mostly used with array and objects.

// for(const iterator of object){
// }

//! array for of loop: 

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
  console.log(num)
}


//! string for of loop: 


const greetings = "hello world";
for (const greet of greetings) {
  console.log(greet);
}


//map : it is object which stores in key value pairs.
const map = new Map()
map.set('IN', "India")
map.set('USA', "United states of America")
map.set("FR", 'France')

console.log(map)
for (const key of map) {
  console.log(key)
}
//it prints in array format, key value pair in array, so 

//another method, without array: 
for (const [key, value] of map) {
  console.log(key, ':->', value);
}
//[key, value] : it will destructure the array elements. 



//! for of loop for object: 

const myObj = {
  name: "shubham",
  game: "js",
}

// for(const key of myObj){
//   console.log(key)  //it will give error: object is not iterable, so we have to use another method.
// }


//? for in loop for objects: 

const myObj2 = {
  name: 'shubham',
  age: 23,
}

for (const key in myObj2) {
  console.log(key)  // it will print only keys. : name, age
}

//so for printing both key and value: 
for (const key in myObj2) {
  console.log(`${key} is having value: ${myObj2[key]}`)
}

//? for in loop in array: 

const arr2 = [1, 2, 3, 4, 5, 6];
for (const key in arr2) {
  console.log(key)  //it will print index no. 
  console.log(arr2[key]) //it will print values
}


//* forEach loop on array:: 

//forEach requires callback function.
const arr4 = [1, 2, 3, 4, 5, 6, 7];
arr4.forEach(function (item) {
  console.log(item)
})

//forEach with arrow function: 
arr4.forEach((item) => {
  console.log(item);
})

//3rd method: 
function printMe(item) {
  console.log(item)
}
arr4.forEach(printMe)


// more parameters in forEach loop: 

arr4.forEach((item, index, arr) => {
  console.log(item, index, arr)
})



//object: 
const obj4 = [
  {
    name: "shubham",
    id: 1,
  },
  {
    name: "shubham",
    id: 2,
  },
  {
    name: "shubham",
    id: 3,
  },
  {
    name: "shubham",
    id: 4,
  },

]

obj4.forEach( (item)=>{
  console.log(item.name);
})


