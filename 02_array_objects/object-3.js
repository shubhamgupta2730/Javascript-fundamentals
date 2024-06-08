//! Object destructuring:

const course = {
  cousrname: "javascript",
  price: "999",
  courseInstructor: "shubham",
}


// course.courseInstructor: 

//destructuring {} the course object to get courseInstructor as Instructor. 
const {courseInstructor: instructor} = course
// console.log(courseInstructor)
console.log(instructor);


//? Earlier the values from APIs comes in XML format, but now it comes in json format(easy and redable format)

// {
//   "name":"Shubham",
// "coursename":"javascript",
// }


