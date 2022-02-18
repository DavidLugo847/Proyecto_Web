function mouseImagen(){
    alert("El cursor esta sobre la imagen");
}
function turnhidden(){
    document.getElementById("img2").className = "img-invisible";
}
function turnvisible(){
    document.getElementById("img2").className = "img-visible";
}

function cambiarImagen(){
    document.getElementById("img3").src = "img/integra.jpg";
}
function returnImg(){
    document.getElementById("img3").src = "img/crx.jpg";
}



function cambioDeImagen(id, ruta){
    let imagen = document.getElementById(id);
    imagen.src=ruta;
}

// Autos cambios

// function cambio1(){
//     document.getElementById("imgprincipal").src="img/ek9poster.jpg";
// }
// function cambio2(){
//     document.getElementById("imgprincipal").src="img/dc2poster.jpg";
// }
// function cambio3(){
//     document.getElementById("imgprincipal").src="img/crxposter.jpg";
// }
// function cambio4(){
//     document.getElementById("imgprincipal").src="img/nsxposter.jpg";
// }
// function cambio5(){
//     document.getElementById("imgprincipal").src="img/preludeposter.png";
// }
// function cambio6(){
//     document.getElementById("imgprincipal").src="img/eg6poster.png";
// }
