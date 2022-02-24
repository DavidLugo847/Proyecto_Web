function mayus() {
    var municipio = "pitAlito";
    municipio = municipio.toLowerCase();
    res = municipio[0].toUpperCase() + municipio.slice(1);
    console.log(res)
}
// mayus();


function borrarslice() {
    segundonombre = "Valle de Laboyos : Pitalito";
    segundonombre = segundonombre.slice(9, (27 - 11));
    console.log(segundonombre);

}
borrarslice();