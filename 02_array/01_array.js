const myArr = [0,1,2,3,4,5]

const myHeros = ["a", "b","c", "d"]

const myArr2 = new Array(1,2,3,4)

console.log(myArr[1]);

//Array methods: 

myArr.push(6)  // adds element to the last
console.log(myArr);

myArr.pop()  //removes the last element: 
console.log(myArr);

//unshift: 
myArr.unshift(9)  //adds element at the starting position
console.log(myArr);

//shift: 
myArr.shift()
console.log(myArr);  //removes the first element.

console.log(myArr.includes(9)); //false
console.log(myArr.indexOf(5)); //5

const newArr = myArr.join() //converts values to string
console.log(myArr); //returns array
console.log(newArr); //returns in string format

//! slice and splice method: 

console.log("A " , myArr);
const my1 = myArr.slice(1,3);
console.log(my1); //1,2

console.log("B ", myArr);
const my2 = myArr.splice(1,3);
console.log("c", myArr);
console.log(my2); //1,2,3

//Slice: it does not changes the original array, and it excludes the last digit. 

//splice: It makes changes in the original array, it remove those digits from the original array, and it includes the last digit also. 


