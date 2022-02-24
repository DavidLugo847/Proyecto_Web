// node D:/DavidLugo_ADSI/DavidLugo_Project/js-front/operadoresLogicos.js

// OR exclusivo representado con ^ 


beneficioJoven = true;
beneficioSisben = true;

if (beneficioJoven === true ^ beneficioSisben === true) {
    console.log("Es apto para el beneficio.");
} else {
    console.log("NO es apto para aplicar al beneficio.");
}