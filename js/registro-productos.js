function registrar() {
    let nombre = document.getElementById("nombre").value;
    let tipo = document.getElementById("select-tipo").value;
    let marca = document.getElementById("marca").value;
    let descripcion = document.getElementById("descripcion").value;
    let sigarantia = document.getElementById("si-garantia").value;
    let nogarantia = document.getElementById("no-garantia").value;
    let precio = document.getElementById("precio").value;
    let stock = document.getElementById("stock").value;
    let importe = document.getElementById("importe").value;

    document.getElementById("td1").innerHTML = "<p>" + nombre + "</p>";
    document.getElementById("td2").innerHTML = "<p>" + tipo + "</p>";
    document.getElementById("td3").innerHTML = "<p>" + marca + "</p>";
    document.getElementById("td4").innerHTML = "<p>" + descripcion + "</p>";
    document.getElementById("td5").innerHTML = "<p>" + sigarantia + "</p>";
    document.getElementById("td5").innerHTML = "<p>" + nogarantia + "</p>";
    document.getElementById("td6").innerHTML = "<p>" + precio + "</p>";
    document.getElementById("td7").innerHTML = "<p>" + stock + "</p>";
    document.getElementById("td8").innerHTML = "<p>" + importe + "</p>";
}