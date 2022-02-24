function obtenerNodoName(){
    let parent = document.getElementById('nombre-nodo');
    let etiqueta = parent.firstChild;
    let etiqueta2 = parent.firstElementChild;

    alert("El contenido del elemento es "+ etiqueta.nodeName + ".");
    alert("El elemento del elemento es "+ etiqueta2 + ".")
}