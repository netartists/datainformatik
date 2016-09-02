// user is at top position
if(!$(window).scrollTop()) {
    $('header').addClass('header_top');
}

$(window).scroll(function() {
    // user scrolls to top position
    if ($(window).scrollTop() == 0) {
        $('header').addClass('header_top');
    // user leaves top position
    } else {
        $('header').removeClass('header_top');
    }
});