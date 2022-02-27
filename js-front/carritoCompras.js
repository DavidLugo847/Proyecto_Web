"use strict"
let cantidad=0;
let valor = 130000;
function add(){
    cantidad++;
    if(cantidad<=10){
        let subtotal = valor * cantidad;
        document.getElementById('sub').innerHTML="$"+ new Intl.NumberFormat('es-LA').format(subtotal);
        document.getElementById('cant').innerHTML= cantidad;
        document.getElementById('cantProd').innerHTML= cantidad;
        console.log(cantidad);
    }else if(cantidad>10){
        cantidad = 10;
        console.log(cantidad);
    }
}

function quit(){
    cantidad--;
    if(cantidad>=0){
        let subtotal = valor * cantidad;
        document.getElementById('sub').innerHTML="$" + new Intl.NumberFormat('es-LA').format(subtotal);
        document.getElementById('cant').innerHTML= cantidad;
        document.getElementById('cantProd').innerHTML= cantidad;
        console.log(cantidad);
    }else if(cantidad<10){
        cantidad = 0;
        console.log(cantidad);
    }
}
function del(){
    cantidad = 0;
    let subtotal = valor * cantidad;
    document.getElementById('sub').innerHTML="$" + new Intl.NumberFormat('es-LA').format(subtotal);
    document.getElementById('cant').innerHTML= cantidad;
    document.getElementById('cantProd').innerHTML= cantidad;
}