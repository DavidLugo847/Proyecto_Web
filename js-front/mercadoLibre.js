function Automovil(marca, modelo, anyo, valor, kilometraje, ciudad, imagen) {
    this.marca = marca;
    this.modelo = modelo;
    this.anyo = anyo;
    this.valor = valor;
    this.km = kilometraje;
    this.ciudad = ciudad;
    this.imagen = imagen;

}

let auto1 = new Automovil("Toyota", "Supra MK4", "1995", "400000000", "251000", "Pitalito - Huila", "img/supra.jpg");
let auto2 = new Automovil("Mazda", "RX7", "1991", "250000000", "140000", "Pitalito - Huila", "img/rx7.jpeg");
let opcion;



function mostrarInfo() {
    let contenedorPrincipal = document.getElementById("main-content");
    let sh = document.getElementById("busqueda").value;


    let texBusqueda = document.createElement("h3");
    let texto = document.createTextNode('buscando "' + sh + '"');
    texBusqueda.setAttribute("class", "txt-busqueda");
    contenedorPrincipal.appendChild(texBusqueda);
    texBusqueda.appendChild(texto);

    let contenedorProd = document.createElement("div");
    contenedorPrincipal.appendChild(contenedorProd);
    contenedorProd.setAttribute("class", "cont-prod");

    let contenedorImg = document.createElement("div");
    contenedorProd.appendChild(contenedorImg);
    contenedorImg.setAttribute("class", "img-cont");

    let imgAuto = document.createElement("img");
    imgAuto.setAttribute("src", opcion.imagen);
    imgAuto.setAttribute("class", "img-style");
    contenedorImg.appendChild(imgAuto);

    let textCont = document.createElement("div");
    contenedorProd.appendChild(textCont);
    textCont.setAttribute("class", "text-cont");

    let nombreAuto = document.createElement("p");
    nombreAuto.setAttribute("class", "nombre-auto");
    let marca = document.createTextNode(opcion.marca + " " + opcion.modelo);
    textCont.appendChild(nombreAuto);
    nombreAuto.appendChild(marca);

    let precioAuto = document.createElement("p");
    precioAuto.setAttribute("class", "precio-auto");
    let precioFormat = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(opcion.valor);
    let valor = document.createTextNode(precioFormat);
    textCont.appendChild(precioAuto);
    precioAuto.appendChild(valor);

    let anyoAuto = document.createElement("p");
    anyoAuto.setAttribute("class", "anyo-auto");
    let model = document.createTextNode(opcion.anyo + " · ");
    textCont.appendChild(anyoAuto);
    anyoAuto.appendChild(model);

    let kmAuto = document.createElement("p");
    kmAuto.setAttribute("class", "km-auto");
    let formatKm = new Intl.NumberFormat('es-CO').format(opcion.km);
    let autoKm = document.createTextNode(" " + formatKm + " Km " + " ·");
    textCont.appendChild(kmAuto);
    kmAuto.appendChild(autoKm);

    let ciudadAuto = document.createElement("p");
    ciudadAuto.setAttribute("class", "ciudad-auto");
    let ciudad = document.createTextNode(" " + opcion.ciudad);
    textCont.appendChild(ciudadAuto);
    ciudadAuto.appendChild(ciudad);


    let lineCont = document.createElement("div");
    lineCont.setAttribute("class", "cont-line");
    contenedorPrincipal.appendChild(lineCont);
}

window.addEventListener("keydown", function(event) {
    let busqueda = document.getElementById("busqueda").value;
    if (event.key == "Enter") {
        if (String(busqueda).toLowerCase() == "toyota supra") {
            opcion = auto1
            mostrarInfo(opcion);
        } else if (String(busqueda).toLowerCase() == "mazda rx7") {
            opcion = auto2;
            mostrarInfo(opcion);
        } else {
            this.alert("No se han encontrado coincidencias.");
        }
    }


});