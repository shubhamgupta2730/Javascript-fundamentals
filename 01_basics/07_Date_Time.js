// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);  //object

let myNewDate = new Date(2023, 0, 23)
console.log(myNewDate.toDateString());

let mytimeStamp = Date.now()
console.log(mytimeStamp);

//convert milli seconds to seconds: 

console.log(Math.floor(Date.now()/1000)); //0utput will be in seconds. 

let newDate = new Date()
console.log(newDate.getMinutes());

 