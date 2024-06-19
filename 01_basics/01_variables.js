const accountId = 101;
let accountEmail = "arpit@gmail.com";
var accoutnPassword = "12345";
accountCity = "Pune"

/* Reccomendation - > do not use the var variable nowdays because of its  issue in the block scope
    it will overrite the value of the outer variable if re declared in the block scope 
*/

console.table([accountId,accountEmail,accoutnPassword,accountCity]);