// user is at top position
if(!$(window).scrollTop()) {
    $('header').addClass('header-top');
    $('.navbar-brand-image').addClass('navbar-brand-image-top');
    $('.navbar-brand-image img').addClass('navbar-brand-image-logo-top');
    $('.container > nav > ul > li > a').addClass('container-nav-a-top');
}

$(window).scroll(function() {
    // user scrolls to top position
    if ($(window).scrollTop() == 0) {
        $('header').addClass('header-top');
        $('.navbar-brand-image').addClass('navbar-brand-image-top');
        $('.navbar-brand-image img').addClass('navbar-brand-image-logo-top');
        $('.container > nav > ul > li > a').addClass('container-nav-a-top');
    // user leaves top position
    } else {
        $('header').removeClass('header-top');
        $('.navbar-brand-image').removeClass('navbar-brand-image-top');
        $('.navbar-brand-image img').removeClass('navbar-brand-image-logo-top');
        $('.container > nav > ul > li > a').removeClass('container-nav-a-top');
    }
});