// Autor: DavidLugo





function buscar() {
    let arreglo = ["Javier", "David", "Jose", "Maria", "Andrea"];
    let nombre = document.getElementById('name').value;

    for (var i = 0; i <= arreglo.length; i++) {

        if (String(nombre.toLowerCase()) === String(arreglo[i].toLowerCase())) {
            return document.getElementById('resultado').innerHTML = "Microsoft Windows [Versión 10.0.19043.1348]<br> (c) Microsoft Corporation.Todos los derechos reservados.<br><br> C:/Users/MIPC><br>----------------------<br>----------------------<br>El nombre " + "'" + nombre + "'" + " se encuentra registrado.";
        } else {
            document.getElementById('resultado').innerHTML = 'Microsoft Windows [Versión 10.0.19043.1348]<br> (c) Microsoft Corporation.Todos los derechos reservados.<br><br> C:/Users/MIPC><br>----------------------<br>----------------------<br>' + "'" + nombre + "'" + ' no tiene concidencias...';
        }
    }
}