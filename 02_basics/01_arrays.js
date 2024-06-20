// In js can contain heterogeneous elements.!
//Js arrays are resizable 
// arrays elemests can not access using arbitary strings as indexes
//in arrays if we make the operations  it will make shallow copy  means the smae arrya will changes.!!


const myArray = [0,1,2,3,4,5]
const arr1 = [ "arpit","patidar"]
const arr2 = new Array(1,2,3,4,5)

console.log(myArray.at(0)); // return the value at index 2
console.log(myArray.at(-1));  // return the value of last element in the array.!

myArray.push(10)
myArray.push(11)
myArray.pop()
console.log(myArray);
myArray.unshift(-1);  // ADD THE ELEMENT AT THE STARTING OF THE ARRAY.
myArray.push(11)

console.log(myArray);
myArray.shift();    // REMOVE THE ELEMENT AT THE STARTING OF THE ARRAY.
console.log(myArray);

console.log(myArray.includes(0));
console.log(myArray.indexOf(11));


//
const newArr = myArray.join();  //bind the array and  store it into newArr convert it into string
console.log(newArr);
console.log(typeof newArr); // it is string


/* Slice ans Splice */

const array1 = [1,2,3,4,5]
console.log(array1.slice(1,3));  // only return the extracted array and do not change thre original array and also endpoint is also not included 
console.log(array1);

console.log(array1.splice(1,3));   // the differnce between the slice and splice is it will include the end point as well and also changes the original array and slice do not 
console.log(array1);   // the value from index 1 -> 3 get extracted from the original array 

