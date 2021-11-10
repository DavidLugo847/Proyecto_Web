// node D:/DavidLugo_ADSI/DavidLugo_Project/js-front/numbers.js

"mode strict"
let costo = 32000;
let impuesto = 3500;
console.log("Subtotal: $" + (costo + impuesto));
console.log("El costo del domicilio es de $2.000");
console.log("Con domicilio: $" + (costo + impuesto + 2000));
//Hallando el limite de la constante number .MAX_SAFE_INTEGER
console.log(Number.MAX_SAFE_INTEGER);
//Hallando el limite de una operacion de potenciacion
console.log(Math.pow(2, 53 - 1));
//Hallando eñ limite de la conversion de binario a decimal
let binario = "11111111111111111111111111111111111111111111111111111"
let binarioenDecimal = parseInt(binario, 2);
console.log(binarioenDecimal);
console.log(Number.MIN_SAFE_INTEGER);




let tryConvertToNumber = parseInt()