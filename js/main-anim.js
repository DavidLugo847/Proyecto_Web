$(document).ready(main);

var contador = 1;

function main() {

    $('.menu-bar').click(function() {

        if (contador == 1) {

            $('#main-content, .bar').animate({

                left: 0
            });
            contador = 0;
        } else {

            contador = 1;

            $('#main-content ,.bar').animate({
                left: '-12.5%'
            });
        }
    });

    $('.submenu').click(function() {
        $(this).children('.children').slideToggle();
    });
}