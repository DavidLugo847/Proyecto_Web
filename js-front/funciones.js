"use strict"
var fechaActual = new Date();

function mostrarHora() {
    let h = parseInt(fechaActual.getHours());
    let m = fechaActual.getMinutes();
    let hc = 0;
    let time = "";
    if (h > 12) {
        hc = h - 12;
        time = "P.M."
    } else {
        hc = h;
        time = "A.M."
    }
    if (m < 10) {
        m = "0" + m.toString();
    }
    alert("Son las " + hc + ":" + m + " " + time);
}
mostrarHora();

function mostrarFecha() {

    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    let dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    let diahoy = fechaActual.getDay();
    let meshoy = fechaActual.getMonth();
    let diames = fechaActual.getDate();
    let anio = fechaActual.getFullYear();


    alert("Hoy es " + dias[diahoy] + ", " + diames + " de " + meses[meshoy] + " del " + anio + ".")
}




// Funcion con parametros


function saludo(saludoNavidad) {
    let saludoSencillo = "Bienvenidos."
    if (meshoy === 11) {
        alert(saludoSencillo + " " + saludoNavidad);
    } else {
        alert(saludoSencillo);
    }
}




function saludoAprendiz(nombre, aprendiz) {

    alert("Mi nombre es: " + nombre + " y soy aprendiz del SENA, " + aprendiz);
}






// Funciones con retorno

function validarDescuento() {
    let total = 0;
    if (compra < 10000) {
        total = compra * .9;
    } else if (compra >= 5000 && compra < 9999) {
        total = compra * .95;
    } else if (compra < 5000) {
        total = compra;
    } else {
        total = -1;
    }
    return total;
}

function calcularDescuento(costo) {
    if (costo === -1) {
        alert("Ha surgido un problema")
    } else if (costo >= 1) {
        alert("El costo " + validarDescuento(costo));
    }
}