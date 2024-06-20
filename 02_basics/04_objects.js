
//const user = new Object();   ////Singletone OBJECT 

const user ={} 
user.id = "123abc"
user.name = "arpit"

const anotherUser ={                              // objects chaining 
    email:"abc@gmail.com",
    fullname:{
        userfullname:{
            firstName :"arpit",
            lastName :"patidar"
        }
    }
}

const obj1 = {a:1,b:2}
const obj2 = {c:3,d:4}

const targetObject = Object.assign(obj1,obj2);   // assign method add the given two objects and return it to the target object,
console.log(targetObject);

//we can also add the objects with the help of the spread operator.
const targetObject1 = {...obj1,...obj2}    // ...(operator) by this all the element of the given object spreaded likewise the glass of water breaks and water spreads on the floor.
console.log(targetObject1);


// Array of Objects
const users = [
    {
        id:1,
        name:"arpit"
    },
    {
        //...
    }
]
console.log(users[0].id);

//Array of keys.!

const user1 = {
    name:"Arpit",
    name:"Bittu",   // we can give the same key it is allowed in JS but it will replace the old value with the new one
    mobileNo :"9009395852",
    age:24,
    email:"arpit@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Tuesday"],
    "location":"Pune",
    
//  mySymbol : "mySymbolVlaue"  // This will not work like this it will acting as sring not symbol 

}

console.log(user1.name);
console.log(Object.keys(user1));  // it will return the array of the keys
console.log(Object.values(user1));
console.log(Object.entries(user1));  // return ->  [[key,value],[key1,value1]] ,return the array in the key value array format.

console.log(user1.hasOwnProperty('name'));  // return true if it contains the name property if contains it will return true.



