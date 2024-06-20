const age = new Number(25) 
console.log(age); //Number type it will print [Number :25]
console.log(isNaN(age));  //return false because it is no and this method return true if the input is Not a number and false if the input is the no

console.log(age.toString().length);  // 25 converted into string 


const hundreds = 110000
console.log(hundreds.toLocaleString('en-IN'));


/* MATH LIBRARY */

console.log(Math.abs(-4));
console.log(Math.PI);
console.log(Math.pow(2,2));
console.log(Math.round(5.7));  // by default mechanism of rounding 
console.log(Math.ceil(5.2));
console.log(Math.floor(5.7));
console.log(Math.min(3,4,5,6));


console.log(Math.random()); //this method will return  the random value from 0 -1 

//fprmula or the concet for generating the randow no between the given range

const min = 5;
const max = 10 ;
console.log(Math.floor( Math.random() * (max - min +1)) + min);