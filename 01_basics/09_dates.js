//Date is a object it repersents the millisecond since the begginnig of 1 January 1990 

let myDate  = new Date();
console.log(typeof myDate);
console.log(myDate); //unreadable
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toJSON());
console.log(myDate.getFullYear());
console.log(myDate.getMonth());
console.log(myDate.getDate());


let myCreatedDate  = new Date(2024,5,24);  //this is the first method how we create our own date 
console.log(myCreatedDate.toDateString());

let myCreatedDate1  = new Date("2024-06-20");
console.log(myCreatedDate1.toLocaleString());


/* timestamp scenario */
let myTimeStamp = Date.now()  //GIVE THE MILISECONDS FROM THE 1 JANUARY 1990 
console.log(myTimeStamp);
console.log(Math.floor(myTimeStamp/1000)); // this get converted into seconds.!



/* IMP* -> how to modify the structure of date */
let newDate = new Date();
newDate = newDate.toLocaleString('default',{
    weekday : "long",
    hourCycle:"h24",
    minute:"2-digit"
})
console.log(newDate);
