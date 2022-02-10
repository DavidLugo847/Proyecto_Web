function obtenerPadre(){
    let divContent = document.getElementById('cont-1');
    let padreDivContent = divContent.parentNode.nodeName;
    alert(padreDivContent);
}