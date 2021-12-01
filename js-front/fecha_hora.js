"use strict"
// davidLugo




// Obtenemos el tiempo y la hora GTM del Navegador
// console.log('====Fecha y Hora====');
// var timeGTM = new Date();
// console.log(timeGTM);


//Fecha a string

// console.log('====Fecha y Hora Local====');
// rentStr = new Date();
// console.log(timeCurrentStr.toString());




//Extraer elementos de la fecha

//Extraer el dia

// console.log("===Obteniendo el dia===");
// var numDiaSemana = new Date();
// console.log(numDiaSemana.getDay());


//el dia 0 es el domingo
//el sabado es el dia 6

// console.log("Dia de la semana " + numDiaSemana);
// let dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
// let hoy = numDiaSemana.getDay();
// console.log("Hoy es: " + dias[hoy]);




//Metodos mas comunes

// console.log("===Fecha y Hora local desfragmentada===");
var currenTime = new Date();
// console.log("Dia de la semana: " + currenTime.getDay());
// console.log("Mes del anio: " + currenTime.getMonth());
// console.log("Dia del mes" + currenTime.getDate());
// console.log("Anio: " + currenTime.getFullYear());
// console.log("Hora: " + currenTime.getHours());
// console.log("Minutos: " + currenTime.getMinutes());
// console.log("Segundos: " + currenTime.getSeconds());
// console.log("Milisegundos: " + currenTime.getMilliseconds());



// let dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
// let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Noviembre", "Diciembre"];

// let diahoy = currenTime.getDay();
// let meshoy = currenTime.getMonth();
// let diames = currenTime.getDate();
// let anio = currenTime.getFullYear();
// let h = parseInt(currenTime.getHours());
// let m = currenTime.getMinutes();
// let hc = 0;
// let time = "";

// if (h > 12) {
//     hc = h - 12;
//     time = "P.M."
// } else {
//     hc = h;
//     time = "A.M."
// }
// if (m < 10) {
//     //agregar un 0 a los minutos menores de 10
//     m = "0" + m.toString();
// }


// console.log("Hoy es " + dias[diahoy] + ", " + diames + " de " + meses[meshoy] + " del " + anio + ".\n" + "Son las " + hc + ":" + m + " " + time)







// let navidad = new Date("February 16, 2022");
// let tiempohoy = new Date();


// let msNavidad = navidad.getTime();
// let hoy = tiempohoy.getTime();
// let msFaltantes = msNavidad - tiempohoy;
// let segundosFaltantes = msFaltantes / 1000;
// let minFaltantes = segundosFaltantes / 60;
// let horasFaltantes = minFaltantes / 60;
// let diasFaltantes = horasFaltantes / 24;

// console.log("Segundos: " + Math.floor(segundosFaltantes) + "\n" + "Minutos: " + Math.floor(minFaltantes) + "\n" + "Horas: " + Math.floor(horasFaltantes) + "\n" + "Dias: " + Math.floor(diasFaltantes));






function calcular() {
    let fechaNacimiento = new Date("February 16, 2002");
    let anioH = fechaNacimiento.getFullYear();
    let mesH = fechaNacimiento.getMonth();
    let diaH = fechaNacimiento.getDay();
    let anioIng = parseInt(document.getElementById("anio").value);
    let diaIng = parseInt(document.getElementById("dia").value);
    let mesIng = parseInt(document.getElementById("mes").value);
    let edad = 0;

    anioRes = anioIng - anioH;


    if (anioH < anioIng) {
        if (mesH < mesIng) {
            edad = anioIng - anioH;
        } else if (mesH === mesIng && diaH <= diaIng) {
            edad = anioIng - anioH;
        } else {
            edad = edad - 1;
        }
    } else if (anioH === anioIng) {
        alert("Edad: 0 años.")
    } else {
        alert("Lo datos ingresados son incorrectos.")
    }
    alert("Edad: " + edad + " años.")




}