"use strict"

function mostrarHora() {
    let fechaActual = new Date();
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