var personas = [];


function registrar() {
    let nom = document.getElementById('nombre').value;
    let ap = document.getElementById('apellido').value;
    personas.push({
        nom,
        ap
    });
    alert('Se ha registrado: ' + nom);
    listar();
}

function listar() {
    var datos = "";
    for (var i = 0; i < personas.length; i++) {
        datos += "<tr><td>" + personas[i].nom + "</td>";
        datos += "<td>" + personas[i].ap + "</td><tr>";
        console.log(datos);
    }
    document.getElementById('Tabla').innerHTML = datos;
}