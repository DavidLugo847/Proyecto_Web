function Automovil(marca, modelo, anyo, valor, kilometraje, ciudad, imagen) {
    this.marca = marca;
    this.modelo = modelo;
    this.anyo = anyo;
    this.valor = valor;
    this.km = kilometraje;
    this.ciudad = ciudad;
    this.imagen = imagen;

}
let auto = new Automovil("Toyota", "Supra MK4", "1995", "400000000", "25000", "", "img/supra.jpg");
let auto1 = new Automovil("Mazda", "RX7", "1991", "250000000", "img/supra.jpg");




function mostrarInfo() {
    let contenedorPrincipal = document.getElementById("main-content");

    let contenedorProd = document.createElement("div");
    contenedorPrincipal.appendChild(contenedorProd);
    contenedorProd.setAttribute("class", "cont-prod");

    let contenedorImg = document.createElement("div");
    contenedorProd.appendChild(contenedorImg);
    contenedorImg.setAttribute("class", "img-cont");

    let imgAuto = document.createElement("img");
    imgAuto.setAttribute("src", auto.imagen);
    imgAuto.setAttribute("class", "img-style");
    contenedorImg.appendChild(imgAuto);

    let textCont = document.createElement("div");
    contenedorProd.appendChild(textCont);
    textCont.setAttribute("class", "text-cont");

    let nombreAuto = document.createElement("p");
    nombreAuto.setAttribute("class", "nombre-auto");
    let marca = document.createTextNode(auto.marca + " " + auto.modelo);
    textCont.appendChild(nombreAuto);
    nombreAuto.appendChild(marca);

    let precioAuto = document.createElement("p");
    precioAuto.setAttribute("class", "precio-auto");
    let precioFormat = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(auto.valor);
    let valor = document.createTextNode(precioFormat);
    textCont.appendChild(precioAuto);
    precioAuto.appendChild(valor);

    let anyoAuto = document.createElement("p");
    anyoAuto.setAttribute("class", "anyo-auto");
    let model = document.createTextNode(auto.anyo + " · ");
    textCont.appendChild(anyoAuto);
    anyoAuto.appendChild(model);

    let kmAuto = document.createElement("p");
    kmAuto.setAttribute("class", "km-auto");
    let formatKm = new Intl.NumberFormat('es-CO').format(auto.km);
    let autoKm = document.createTextNode(formatKm + " Km ");
    textCont.appendChild(autoKm);
    autoKm.appendChild(autoKm);



















}



window.addEventListener("keydown", function(event) {
    let busqueda = document.getElementById("busqueda").value;
    if (event.key == "Enter") {
        if (busqueda == "Toyota Supra") {
            mostrarInfo(auto);
        } else if (busqueda == "Mazda RX7") {
            mostrarInfo(auto1);
        } else {
            this.alert("No se han encontrado coincidencias.");
        }
    }


});