function obtenerHermanos(){
    let hijosDiv = document.getElementById('hermanos');
    let elemento3 = hijosDiv.childNodes[5];
    let nextHermano = elemento3.nextElementSibling.innerHTML;
    alert(nextHermano);

    // previous
    let previousHermano = elemento3.previousElementSibling.innerHTML;
    alert(previousHermano);
}