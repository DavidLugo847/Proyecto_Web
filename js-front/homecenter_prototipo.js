function barStock() {
    let logoLink = 'https://images.contentstack.io/v3/assets/blt2f8082df109cfbfb/blt92ad3c89ae70b4d0/5f31a4ce1fe0e07eae813320/Logo_header_mobile.jpg?auto=webp&disable=upscale&quality=70&width=1024';
    let navBarStock = document.getElementById('nav');
    navBarStock.setAttribute("class", "nav-bar");

    let nv1 = document.createElement('div');
    nv1.setAttribute("class", "nv1");
    navBarStock.appendChild(nv1);

    let iconSpan1 = document.createElement('span');
    iconSpan1.setAttribute("class", "icon icon-bars");
    nv1.appendChild(iconSpan1);

    //

    let nv2 = document.createElement('div');
    nv2.setAttribute("class", "nv2");
    navBarStock.appendChild(nv2);

    let logoImg = document.createElement('img');
    logoImg.setAttribute("src", logoLink);
    logoImg.setAttribute("class", "img-logo");
    nv2.appendChild(logoImg);

    //

    let nv3 = document.createElement('div');
    nv3.setAttribute("class", "nv3");
    navBarStock.appendChild(nv3);

    let iconSpan3 = document.createElement('span');
    iconSpan3.setAttribute("class", "icon icon-search2");
    iconSpan3.setAttribute("id", "search-icon");
    nv3.appendChild(iconSpan3);

    //

    let nv4 = document.createElement('div');
    nv4.setAttribute("class", "nv4");
    navBarStock.appendChild(nv4);

    let circle = document.createElement('div');
    circle.setAttribute("class", "circle");
    nv4.appendChild(circle);

    let numCircle = document.createElement('p');
    circle.appendChild(numCircle);

    let txtProd = document.createTextNode("0");
    numCircle.setAttribute("class", "num-prod");
    numCircle.appendChild(txtProd);


    let cart = document.createElement('div');
    cart.setAttribute("class", "sp1");
    nv4.appendChild(cart);

    let iconCart = document.createElement('span');
    iconCart.setAttribute("class", "icon icon-shopping-cart1");
    cart.appendChild(iconCart);

    let user = document.createElement('div');
    user.setAttribute("class", "sp2");
    nv4.appendChild(user);

    let iconUser = document.createElement('span');
    iconUser.setAttribute("class", "icon icon-user-o");
    user.appendChild(iconUser);

    //

    let lupa = document.getElementById('search-icon');
    lupa.addEventListener('click', mostrar);

    function mostrar() {
        document.getElementById('nav').innerHTML = "";
        searchbox();
    }
}
window.onload = barStock;


function searchbox() {
    let navbar = document.getElementById('nav');
    navbar.setAttribute("class", "nav-searching");


    let contLbSearch = document.createElement('div');
    contLbSearch.setAttribute("class", "cont-search");
    navbar.appendChild(contLbSearch);

    let spanLupa = document.createElement('span');
    spanLupa.setAttribute("class", "icon-search2");
    contLbSearch.appendChild(spanLupa);

    let contLbInput = document.createElement('div');
    contLbInput.setAttribute("class", "cont-inputsearch");
    navbar.appendChild(contLbInput);

    let searchInput = document.createElement("input");
    searchInput.setAttribute("class", "search-input");
    searchInput.setAttribute("placeholder", "¿Que estás buscando?");
    contLbInput.appendChild(searchInput);

    let contLbClose = document.createElement('div');
    contLbClose.setAttribute("class", "cont-close");
    navbar.appendChild(contLbClose);

    let spanX = document.createElement("span");
    spanX.setAttribute("class", "icon-close1");
    spanX.setAttribute("id", "iconX");
    contLbClose.appendChild(spanX);


    let closeX = document.getElementById('iconX');
    closeX.addEventListener('click', regresar);

    function regresar() {
        document.getElementById('nav').innerHTML = "";
        barStock();

    }

}