//Autor: DavidLugo

function calc() {


    let palabra = document.getElementById('palabra').value;


    if (palabra.length > 50) {
        document.getElementById('res').innerHTML = "Microsoft Windows [Versión 10.0.19043.1348]<br> (c) Microsoft Corporation.Todos los derechos reservados.<br><br> C:/Users/MIPC><br>----------------------<br>----------------------<br>¡Lo sentimos! Has exedido el limite de caracteres (50)."
    } else {
        document.getElementById('res').innerHTML = "Microsoft Windows [Versión 10.0.19043.1348]<br> (c) Microsoft Corporation.Todos los derechos reservados.<br><br> C:/Users/MIPC><br>----------------------<br>----------------------<br> La palabra " + palabra + " tiene " + palabra.length + " caracteres.";

    }
}