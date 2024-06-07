   //other way of declaring object: 
   //singleton object: 
   const user = new Object()

   user.id = "123"
   user.name = "Shubham"
   user.loggedIn = false

   //console.log(user)

   const regularUser = {
    email : "email@gmail.com",
    fullname: {
      userFullname:{
        firstname: "shubham",
        lastname:"gupta",
      }
    },

   }
   console.log(regularUser.fullname.userFullname.firstname)

   const obj1 = {1:"a", 2:"b"}
   const obj2 = {3:"c", 4: "d"}

   //const obj3 = {obj1, obj2} it will add objj2 inside obj1: so another method, 

   //! object.assign() method: 
   const obj3 = Object.assign({}, obj1, obj2)
   console.log(obj3)

   //! Spread operator: 
   const obj4 = {...obj1, ...obj2}
   console.log(obj4)

   //?  when values comes from database: 
   //it will mostly be in array of objects format: 

   const users = [
    {
      id: 1,
      email: "h2@gmail.com",
    },
    {
      id: 2,
      email: "h2@gmail.com",
    },
    {},

   ]

   console.log(users[1].email)

   //?to get keys, values of object, mostly used in databases. 
   console.log(Object.keys(user))
   console.log(Object.values(user))
   console.log(Object.entries(user))

   console.log(user.hasOwnProperty('name')) //true , if property exists., false, if not exists in object.
