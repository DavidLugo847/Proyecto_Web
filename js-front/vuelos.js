let Vuelos = {
    constructor(horaSalida, horaLlegada, origen, destino, precio, tipo) {
        this.horaSalida = horaSalida;
        this.horaLlegada = horaLlegada;
        this.origen = origen;
        this.destino = destino;
        this.precio = precio;
        this.tipo = tipo;
    }
}


let horaSalida1 = new Date(2022, 03, 18, 10, 15, 0);
let horaSalidaStr = horaSalida1.getHours() + ":" + horaSalida1.getMinutes() + " a. m.";
let horaLlegada1 = new Date(2022, 03, 18, 12, 25, 0);
let horaLlegada1Str = horaLlegada1.getHours() + ":" + horaLlegada1.getMinutes() + " p. m.";
let duracion = (parseInt(horaLlegada1.getHours()) - parseInt(horaSalida1.getHours())) + " h " + (parseInt(horaLlegada1.getMinutes()) - parseInt(horaSalida1.getMinutes())) + " min.";

let horaSalida2 = new Date(2022, 03, 20, 08, 30, 0);
let horaSalidaStr2 = horaSalida2.getHours() + ":" + horaSalida2.getMinutes() + " a. m.";
let horaLlegada2 = new Date(2022, 03, 20, 09, 30, 0);
let horaLlegada2Str = horaLlegada2.getHours() + ":" + horaLlegada2.getMinutes() + " p. m.";
let duracion2 = (parseInt(horaLlegada2.getHours()) - parseInt(horaSalida2.getHours())) + " h " + (parseInt(horaLlegada1.getMinutes()) - parseInt(horaSalida1.getMinutes())) + " min.";




console.log(duracion);

let Vuelo = [{
    "horaSalida": horaSalidaStr,
    "horaLlegada": horaLlegada1Str,
    "origen": "BOG",
    "destino": "ADZ",
    "precio": "cop 160.000",
    "duracion": duracion,
    "tipo": "Directo"

}, {
    "horaSalida": horaSalidaStr2,
    "horaLlegada": horaLlegada2Str,
    "origen": "NVA",
    "destino": "JPN",
    "precio": "cop 2'500.000",
    "duracion": duracion2,
    "tipo": "Directo"

}];

console.log("La hora de salida del vuelo con destino a " + Vuelo[0].destino + " sale a las " + Vuelo[0].horaSalida + " y la hora de llegada a las " + Vuelo[0].horaLlegada);

function mostrarArray() {
    for (let i = 0; i <= Vuelo.length; i++) {
        let horaSalidaVuelo = Vuelo[i].horaSalida;
        let horaLlegadaVuelo = Vuelo[i].horaLlegada;
        let destinoViaje = Vuelo[i].destino;
        let tipoViaje = Vuelo[i].tipo;
        let precioVuelo = Vuelo[i].precio;
        let origenVuelo = Vuelo[i].origen;
        let duracionViaje = Vuelo[i].duracion;

        mostrar(horaSalidaVuelo, horaLlegadaVuelo, destinoViaje, tipoViaje, precioVuelo, origenVuelo, duracionViaje);

        function mostrar() {
            let mainCont = document.getElementById("main-content");

            let contenedor = document.createElement("div");
            contenedor.setAttribute("class", "contenedor");
            mainCont.appendChild(contenedor);

            let contVuelo = document.createElement("div");
            contVuelo.setAttribute("class", "cont-vuelo");
            contenedor.appendChild(contVuelo);

            let Rapido = document.createElement("div");
            Rapido.setAttribute("class", "rapido");
            contVuelo.appendChild(Rapido);

            let lbVelocidad = document.createElement("p");
            lbVelocidad.setAttribute("class", "lb-velocidad");
            let vueloText = document.createTextNode("Mas Rapido");
            Rapido.appendChild(lbVelocidad);
            lbVelocidad.appendChild(vueloText);

            let duracioncont = document.createElement("div");
            duracioncont.setAttribute("class", "duracion-cont");
            contVuelo.appendChild(duracioncont);
            contVuelo.appendChild(duracioncont);

            let lbDuracion = document.createElement("p");
            lbDuracion.setAttribute("class", "lb-txtduracion");
            let duracionV = document.createTextNode("Duración");
            duracioncont.appendChild(lbDuracion);
            lbDuracion.appendChild(duracionV);

            let duracionVuelo = document.createElement("p");
            duracionVuelo.setAttribute("class", "lb-duracion");
            let duracionTXT1 = document.createTextNode(duracionViaje);
            duracioncont.appendChild(duracionVuelo);
            duracionVuelo.appendChild(duracionTXT1);

            let horaVueloSalida = document.createElement("p");
            horaVueloSalida.setAttribute("class", "lb-salida");
            let horaSalidatxt = document.createTextNode(horaSalidaVuelo);
            contVuelo.appendChild(horaVueloSalida);
            horaVueloSalida.appendChild(horaSalidatxt);

            let origen = document.createElement("p");
            origen.setAttribute("class", "lb-origen");
            let origenText = document.createTextNode(origenVuelo);
            contVuelo.appendChild(origen);
            origen.appendChild(origenText);

            let destinoVuelo1 = document.createElement("p");
            destinoVuelo1.setAttribute("class", "lb-destino");
            let destText1 = document.createTextNode(destinoViaje);
            contVuelo.appendChild(destinoVuelo1);
            destinoVuelo1.appendChild(destText1);

            let horaVueloLlegada = document.createElement("p");
            horaVueloLlegada.setAttribute("class", "lb-llegada");
            let horaLlegadatxt = document.createTextNode(horaLlegadaVuelo);
            contVuelo.appendChild(horaVueloLlegada);
            horaVueloLlegada.appendChild(horaLlegadatxt);

            let contenedorline = document.createElement("div");
            contenedorline.setAttribute("class", "contenedorline");
            contVuelo.appendChild(contenedorline);

            let lbPersona = document.createElement("p");
            lbPersona.setAttribute("class", "lb-persona");
            let persona = document.createTextNode("Adultos desde");
            contenedorline.appendChild(lbPersona);
            lbPersona.appendChild(persona);

            let tipoVuelo = document.createElement("p");
            tipoVuelo.setAttribute("class", "lb-tipovuelo");
            let tipoVueloTxt = document.createTextNode(tipoViaje);
            contenedorline.appendChild(tipoVuelo);
            tipoVuelo.appendChild(tipoVueloTxt);

            let precio = document.createElement("p");
            precio.setAttribute("class", "lb-precio");
            let precioVueloTxt = document.createTextNode(precioVuelo);
            contenedorline.appendChild(precio);
            precio.appendChild(precioVueloTxt);

        }

    }
}






window.onload = function() { mostrarArray(); }