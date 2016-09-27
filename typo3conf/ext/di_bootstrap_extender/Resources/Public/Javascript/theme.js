/*
 * Fixed and minimize header
 */
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


/**
 * Opens layer navigation
 *
 * @return void
 */
var activateNavLayer = function () {

    // check if desktop view port
    // check if layer is activated
    if ($(".navbar-toggle").css("display") != "none") {
        return true;
    } else {

        // hide all other layers
        $('.dropdown-menu').hide();

        $this = $(this);

        // open current layer
        $this.siblings('.dropdown-menu').show();
    }
}

/**
 * Closes layer navigation
 *
 * @return void
 */
var deactivateNavLayer = function() {

    if ($(".navbar-main:hover").length <= 0 && $(".navbar-main > li:hover").length <= 0) {
        $('.dropdown-menu').hide();
    };
}

/**
 * Closes layer navigation when mouseover a menu without submenu
 *
 * @return void
 */
var deactivateNavLayerWithoutSub = function() {

    if ($(".dropdown-menu:hover").length <= 0 && $(".dropdown-menu > li:hover").length <= 0) {
        $('.dropdown-menu').hide();
    };
}

$('.dropdown-toggle').mouseover(activateNavLayer);
$('.dropdown-toggle').parent().mouseout(deactivateNavLayer);
$('a:not(".dropdown-toggle")').mouseover(deactivateNavLayerWithoutSub);