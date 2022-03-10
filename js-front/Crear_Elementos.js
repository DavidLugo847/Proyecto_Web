function crearTabla() {

    let nodeAddTable = document.createElement("tables");
    let contenedor = document.getElementById("tabla");
    let nodeAddtr = document.createElement("tr");
    let nodeAddth = document.createElement("th");
    let nodeAddth2 = document.createElement("th");
    let nodeAddth3 = document.createElement("th");
    let nodeAddth4 = document.createElement("th");
    let nodeAddTexto = document.createTextNode("ID Producto");
    let nodeAddTexto2 = document.createTextNode("Descripcion");
    let nodeAddTexto3 = document.createTextNode("Vlr. Unitario");
    let nodeAddTexto4 = document.createTextNode("Stock");

    contenedor.appendChild(nodeAddTable);
    nodeAddTable.appendChild(nodeAddtr);
    nodeAddtr.appendChild(nodeAddth);
    nodeAddtr.appendChild(nodeAddth2);
    nodeAddtr.appendChild(nodeAddth3);
    nodeAddtr.appendChild(nodeAddth4);
    nodeAddth.appendChild(nodeAddTexto);
    nodeAddth2.appendChild(nodeAddTexto2);
    nodeAddth3.appendChild(nodeAddTexto3);
    nodeAddth4.appendChild(nodeAddTexto4);

    nodeAddTable.setAttribute("class", "tabla");
    nodeAddTable.setAttribute("id", "tabla-principal");

}
window.onload = crearTabla;

function listarDatos() {
    let id = document.getElementById("id").value;
    let descripcion = document.getElementById("desc").value;
    let valorUnit = document.getElementById("vlru").value;
    let stock = document.getElementById("stock").value;




    if ((id == "") || (descripcion == "") || (valorUnit == "") || (stock == "")) {
        alert("Completa los campos vacios");

    } else {
        let tabla = document.getElementById('tabla-principal');
        let fila = document.createElement('tr');
        let celda1 = document.createElement('td');
        let celda2 = document.createElement('td');
        let celda3 = document.createElement('td');
        let celda4 = document.createElement('td');

        let info1 = document.createTextNode(id);
        let info2 = document.createTextNode(descripcion);
        let info3 = document.createTextNode("$" + new Intl.NumberFormat('es-LA').format(valorUnit));
        let info4 = document.createTextNode(stock);

        celda1.appendChild(info1);
        celda2.appendChild(info2);
        celda3.appendChild(info3);
        celda4.appendChild(info4);

        fila.appendChild(celda1);
        fila.appendChild(celda2);
        fila.appendChild(celda3);
        fila.appendChild(celda4);
        tabla.appendChild(fila);
        limpiarInputs();
    }
}

function limpiarInputs() {
    document.getElementById("id").value = "";
    document.getElementById("desc").value = "";
    document.getElementById("vlru").value = "";
    document.getElementById("stock").value = "";
}