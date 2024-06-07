const heros = ["a", "b", "c", "d"]
const villains = ["e","f", "g", "h"];

//heros.push(villains)
//push adds the array inside array.
//console.log(heros);

//const newArr = heros.concat(villains)
//concat returns new Array
//console.log(newArr);


//! Spread operator: 

const allheros = [...heros, ...villains]
console.log(allheros);


//! flat() method
const newArray2 = [1,2,3,[2,3,4],7,4,[5,6,[4,4]]]
//this array contains array inside array, so to convert it into a single flat array, we use flat() method, and give infinity inside, to automatically detect the arrays inside array.

const realArray = newArray2.flat(Infinity)
console.log(realArray);

//* convert from other datatype to array: 

console.log(Array.isArray("Shubham"))  //false

console.log(Array.from("Shubham")) //returns the array

//! imp case; 
console.log(Array.from({name:"Shubham"})) //returns empty array, bcoz it is not mentioned that either key or value has to be converted to the array.

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))