// user is at top position
if(!$(window).scrollTop()) {
    $('header').addClass('header-top');
    $('.navbar-brand-image img').addClass('header-logo-top');
}

$(window).scroll(function() {
    // user scrolls to top position
    if ($(window).scrollTop() == 0) {
        $('header').addClass('header-top');
        $('.navbar-brand-image img').addClass('header-logo-top');
    // user leaves top position
    } else {
        $('header').removeClass('header-top');
        $('.navbar-brand-image img').removeClass('header-logo-top');
    }
});