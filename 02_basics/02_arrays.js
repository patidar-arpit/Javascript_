const arr1 = [1,2,3,4]
const arr2  = ["arpit","ram","ravi"]

//arr1.push(arr2)   // directly push the arr2 into the arr1 as one element modify the arr1
console.log(arr1);

const arr3 = arr1.concat(arr2);  // this method merge both the arrays and return final array without modifying the original one.
console.log(arr3);
console.log(arr1);  // arr1 not changes.!

/* Spread Operator *  -> Replacement of the concat spread operator spread the elements of the array*/

const spreadedArray = [...arr1,...arr2] // elelements of the arr1 and arr2 got combined in the 
console.log(spreadedArray);


const arr4 = [1,2,3,4,5,6,[7,8,9],[10,[11,22]]]
const flatedArray = arr4.flat(2);   // arr.flat(depth) return the new array with all sub array elements into it upto the count of depth 
console.log(flatedArray);


console.log(Array.from("Arpit"));  // convert the  given input into the arrray.!

console.log((Array.of(1,2,3,4,5))); // also convert the given elements into the array