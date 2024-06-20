const name = "Arpit"
const age  =24;

//string interpolation 
console.log(`Hello my name is ${name} and my age is ${age}`);

//one more way to declare strings 

const college = new String("UIT RGPV BHOPAL"); // tihis is keyvalue pair  with 0 -> U , ....
console.log(college[0]);
console.log(college.length);

console.log(college.toLowerCase());  // this will not changes the original string it will return the uppercase string 


/*  str.slice(start, end)
     str.substring(start, end)

*/

/* this below cases are same in both slice ans substring */
console.log(college.substring(2,2));  // return an empty string if the start ==end
console.log(college.substring(2));   //  If the stop is omitted, extracts characters till the end of the string
console.log(college.substring(2,20));  //  If any argument is greater than the string’s length, the string’s length will be used in that case.

/* substring different result as with slice */

console.log(college.substring(10,6));  //If start > stop, then the function swaps both arguments.
console.log(college.substring(-4,6));  //If any argument is negative or is NaN, it is treated as 0.  -: -4->0

/* JavaScript slice() different results of slice()*/

console.log(college.slice(6,3));  //f start > stop, This function will return an empty string. (“”)
console.log(college.slice(-7,3)); //If the start is negative, It sets char from the end of the string
console.log(college.slice(-7,-3));


const name1 = "  Arpit Patidar  "
console.log(name1);
console.log(name1.trim()); //remove the start and end spaces..!

console.log(name1.replace("a","-")) // a replaces by the - but only the first occurence.!

console.log(name1.includes('Pa'));  // return trues as it constains  the Pa


console.log(name1.split('')); //converted into the array 