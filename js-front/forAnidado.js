aprendices = ["David", "Andrea", "Daniela", "Alejandro"]
for (i = 0; i <= 3; i++) {
    console.log("Aprendiz N." + (i + 1) + ": " + aprendices[i]);
}

//Cargar informacion a un arreglo desde un html

let producto1 = new Array();
let producto2 = new Array();
let producto3 = new Array();
let producto4 = new Array();
let productos = new Array();

for (let i = 0; i <= 2; i++) {
    alert("Ingrese el registro numero: " + (i + 1));
    if (i == 0) {
        for (let j = 0; j < 4; j++) {
            producto1[j] = prompt("Producto N: " + (i + 1) + "_" + (j + 1) + ": ");

        }
        productos[i] = producto1;

    }
    if (i == 1) {
        for (let j = 0; j < 4; j++) {
            producto1[j] = prompt("Producto N: " + (i + 1) + "_" + (j + 1) + ": ");
        }
        productos[i] = producto2;
    }
    if (i == 2) {
        for (let j = 0; j < 4; j++) {
            producto1[j] = prompt("Producto N: " + (i + 1) + "_" + (j + 1) + ": ");

        }
        productos[i] = producto3;
        document.getElementById("Tabla").value = "<tr><td>Los Productos son: " + producto1 + ", " + producto2 + ", " + producto3 + "</td></tr>";
    }

}