// Singleton -> Objects made from the constructor not from literals -> Object.create
//Object -> key value pair
//Objects literals 

const mySymbol = Symbol("key1")

const user = {
    name:"Arpit",
    mobileNo :"9009395852",
    age:24,
    email:"arpit@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Tuesday"],
    "location":"Pune",
    [mySymbol] : "mySymbolVlaue"
//  mySymbol : "mySymbolVlaue"  // This will not work like this it will acting as sring not symbol 

}


console.log(user.name);
console.log(user.email);
console.log(user["mobileNo"]);
console.log(user["location"]);
console.log(user.location);
console.log(user[mySymbol]);  // also we can accesss the symbol by only this method not like that user.mySymbol

/* we can also change the values of the oobjects*/
user.email = "bits@gmail.com"
console.log(user.email);  // the email of the object gets changess

// But if i want to lock the object means i want nobody can change the state of the object.
Object.freeze(user)
user.name = "bittu"   // It will not gibve the error bu value not change you can seee  the result 
console.log(user.name);
