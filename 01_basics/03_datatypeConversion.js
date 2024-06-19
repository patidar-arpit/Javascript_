let score = 13
let score1 ="145"

let valueInScore = Number(score1) //here the string is converted to the number
console.log(typeof valueInScore);

let nullValue = null;
let valueInNullValue = Number(nullValue)  // here null is converted to the zero in number
console.log(typeof valueInNullValue);
console.log(valueInNullValue);


//type of NaN is number.!

let age = "24a";
let valueInAge = Number(age)  //   here age wants to be  converted into the number but if it is unconvertable then it will give nan
console.log(typeof valueInAge);  //number
console.log(valueInAge); //but it will print NAN 

let flag = true
let flagValue = Number(flag)   // here flag is converted into the boolean
console.log(typeof flag); //boolean
console.log(flagValue); //1


//"33" ->33
//"33ab" -> NaN
//true -> 1

let num1 = 34;
let num1Value = String(num1)  // Here the no is converted into the string.
console.log(typeof num1Value); 
console.log(num1Value);