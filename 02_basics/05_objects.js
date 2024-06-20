/* Destructuring the Objects*/


const course ={
    name :"js in hindi",
    price :"0",
    instructor :"Hitesh"

}

const {instructor} = course  ///extracting the value  instructor from the course so we can directly use it.
console.log(instructor);   // we can directly accesss instructor withous using . operator and [] if extracted  

//const {instructor : inst } = course -> I can also give the name to the extraced value. like inst given in this example.


