/* - > Primitive Datatype -> Call b value
   1.String
   2.Number
   3.Boolean
   5.null
   6.undefined
   7.symbol
   8.BigInt


   ->>Refernece Type / Non Primitive type
   1.Arrays
   2.Objects
   3.Functions

   .JS is the dynamically typed language means datatype is defined at the type of the runtime we not give the type of the varibale when we declared it 

*/

//example of the symbol

const id = Symbol('123')
const id2 = Symbol('123')

console.log(id === id2);
console.log(typeof id);