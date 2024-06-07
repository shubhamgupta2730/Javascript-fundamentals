const score  = 400 
console.log(score);  // 400

const balance = new Number(100)
console.log(balance);   //[Number: 100]

console.log(balance.toString().length); //convert to string 

console.log(balance.toFixed(3)); //precision value upto 3 places after decimal 

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(4)); //precision from first digit. 23.90

const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN')); // add , acc. to indian standards


//*++++++++++Maths+++++++++++++++++==++++++++

console.log(Math);

//Math is an object which has many values or properties. 

console.log(Math.abs(-3));  // 3

console.log(Math.ceil(4.2));  // 5
console.log(Math.floor(4.5));  //4
console.log(Math.round(4.3));  //4
console.log(Math.max(3,4,5));  //5

console.log(Math.random()); // between 0.0 and 1

console.log(Math.random()*10); //between 1.0 - 1.9

console.log((Math.random()*10)+1); // 1.0 - 10.0
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1))+min);

