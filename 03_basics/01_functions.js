function func1(){
    console.log("Arpit..!");
}


//func1 -> it is a functin refernce
func1() //-> it is a function execution 

/* using the rest opeator in the parmameter  -> ...num*/

function calculateCartPrice(...num){
     return num
}
console.log(calculateCartPrice(10,20,30));

/* passing objects in the parameter*/

function handleObject(obj1){
    
}

handleObject({
    userName :"Arpit",
    price:400
})