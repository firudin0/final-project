$(".nav-switch").on('click', function (e) {
    e.preventDefault();
    $(".slicknav_btn").click();
});

$('.nav__menu').slicknav({
    'appendTo' : '.main__menu',
    'openedSymbol': '<i class="fa fa-angle-up"></i>',
    'closedSymbol': '<i class="fa fa-angle-right"></i>'
});



