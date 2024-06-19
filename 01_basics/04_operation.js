let str1 = "Arpit"
let str2 = " Patidar"
let str3 = str1 + str2
console.log(str3);

console.log("1"+2); //12    no +string = string
console.log(1+"2"); //12    string +no = string 
console.log("1"+2+2); //122   in these case see which comes first means it goes left -> right priority  ( string + no )  + no  
console.log(1+2+"2"); //32    in these case left to right  (no+no) + string 