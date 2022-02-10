function leerInfo() {
  let info = document.getElementById("content");
  let infoChild = info.childNodes[5];
  let contents = infoChild.innerHTML;
  alert(contents);
}






function disponibilidad(){
    let nodoCounter = 0;
    let nodos = document.getElementById('viajes');



    if (nodos.hasChildNodes()) {
        var children = nodos.childNodes;
      
        for (var i = 0; i < children.length; i++) {
            nodos.childNodes[i].innerHTML = "Agotado";


            nodos.childNodes[i].style.color = "red";

        }
      }




    
//     for(let i = 0; i <= nodos.childNodes.length; i++){
//         alert(nodos+ " " + nodoCounter);

        
// if(nodos.childNodes[i].nodeType===1){
//     nodoCounter++;
// }else if(nodoCounter===2){
//     nodos.childNodes[i].innerHTML = "Agotado";
//     // nodos.childNodes[i].style.color = "red";
    
// }
//     }
}