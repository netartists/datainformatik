/*
 * Fixed and minimize header
 */
// user is at top position
if(!$(window).scrollTop()) {
    $('header').addClass('header-top');
    $('.navbar-brand-image').addClass('navbar-brand-image-top');
    $('.navbar-brand-image img').addClass('navbar-brand-image-logo-top');
    $('#header-right-container').addClass('header-right-container-top');
    $('.container > nav > ul > li > a').addClass('container-nav-a-top');
}

$(window).scroll(function() {
    // user scrolls to top position
    if ($(window).scrollTop() == 0) {
        $('header').addClass('header-top');
        $('.navbar-brand-image').addClass('navbar-brand-image-top');
        $('.navbar-brand-image img').addClass('navbar-brand-image-logo-top');
        $('#header-right-container').addClass('header-right-container-top');
        $('.container > nav > ul > li > a').addClass('container-nav-a-top');
    // user leaves top position
    } else {
        $('header').removeClass('header-top');
        $('.navbar-brand-image').removeClass('navbar-brand-image-top');
        $('.navbar-brand-image img').removeClass('navbar-brand-image-logo-top');
        $('#header-right-container').removeClass('header-right-container-top');
        $('.container > nav > ul > li > a').removeClass('container-nav-a-top');
    }
});

function initializeNavLayer() {

    // initial active main nav item
    var initialMainNavItem = $('.mainNavItem.active').attr('id');

    // initial hide all nav layers
    $(".mainNavLayerContainer").hide();
    $(".navLayer3Level").hide();
    $(".nav2LevelCnt").hide();

    function _invisibleDimensions(_el) {
        $(_el).css({
            'display':'block',
            'visibility':'hidden'
        });
        var _dim = {
            height:$(_el).outerHeight(),
            width:$(_el).outerWidth()
        };
        $(_el).css({
            'display':'none',
            'visibility':'visible'
        });
        return _dim;
    }

    /**
     * Opens the main navigation layer
     *
     * @return void
     */
    var activateNavLayer = function () {

        // check if desktop view port
        if ($(".mainNavLayerContainer").css("position") == "absolute" ){

            $this = $(this);

            $(".mainNavLayerContainer").hide();

            // calculate height of navigation layer
            $this.next('.mainNavLayerContainer').show();
            var heightSub = $this.next('.mainNavLayerContainer').find('.col-md-4').height();
            $this.next('.mainNavLayerContainer').hide();

            // height of SubSub navigation
            var heightsSubSub = $this.next('.mainNavLayerContainer').find('.col-md-12.navLayer3Level').map(function () {
                $this.next('.mainNavLayerContainer').show()
                $(this).show();
                tmpHeight = $(this).height();
                $(this).hide();
                $this.next('.mainNavLayerContainer').hide();

                return tmpHeight;
            }).get(), maxHeightSubSub = Math.max.apply(null, heightsSubSub);

            if (heightSub > maxHeightSubSub) {
                var maxHeight = heightSub;
            } else {
                var maxHeight = maxHeightSubSub;
            }

            console.log(maxHeight + ', ' + heightSub + ', ' + maxHeightSubSub);

            // height of Sub navigation content
            var heightsSubContent = $this.next('.mainNavLayerContainer').find('.nav2LevelCnt').map(function () {
                $this.next('.mainNavLayerContainer').show()
                $(this).show();
                tmpHeight = $(this).height();
                $(this).hide();
                $this.next('.mainNavLayerContainer').hide();

                return tmpHeight;
            }).get(), maxHeightSubContent = Math.max.apply(null, heightsSubContent);

            if (maxHeightSubContent > maxHeight) {
                var maxHeight = maxHeightSubContent;
            }

            var mainNavPadding = $this.next('.mainNavLayerContainer').innerHeight() - $this.next('.mainNavLayerContainer').height();

            $this.next('.mainNavLayerContainer').css('height', maxHeight + mainNavPadding + 40 + 'px');
            $this.next('.mainNavLayerContainer').show();
            $('.mainNavItem').removeClass('active');
            $this.addClass('active');

            // activate active sub sub nav
            if( $this.next('.mainNavLayerContainer').find('a.activeSub').length > 0 ){
                $this.next('.mainNavLayerContainer').find('a.activeSub').first().nextAll('.navLayer3Level').show();
                if( $this.next('.mainNavLayerContainer').find('a.activeSub').first().nextAll('.navLayer3Level').length > 1 ) {
                    $this.next('.mainNavLayerContainer').find('a.activeSub').first().nextAll('.navLayer3Level.navLayerTeaser').hide();
                }
                $this.next('.mainNavLayerContainer').find('a.activeSub').first().nextAll('.nav2LevelCnt').show();
            }
            // activate first sub sub nav
            else {
                $this.next('.mainNavLayerContainer').find('.col-md-12.navLayer3Level').each(function () {
                    $(this).show();

                    $('*').removeClass('hoverSub');
                    $(this).siblings('.layerSubNavItem').addClass('hoverSub');

                    return false;
                });

                // activate first teaser
                $(".nav2LevelCnt").hide();
                $this.next('.mainNavLayerContainer').find('.nav2LevelCnt').each(function () {
                    $(this).show();

                    return false;
                });
            }
        }
    };

    /**
     * Closes the main navigation layer
     *
     * @return void
     */
    var deactivateNavLayer = function() {

        // set timeout to avoid closing layer in FF and IE
        setTimeout(function(){
            // if (!$(this).find(".mainNavLayerContainer").length || !$(this).find(".mainNavLayerContainer").is(":hover")) {
            if ($(".mainNavLayerContainer:hover").length <= 0 && $(".mainNavItem:hover").length <= 0) {

                $('*').removeClass('hoverSub');
                $('.mainNavLayerContainer').hide();

                // set initial main nav item
                $('.mainNavItem').removeClass('active');
                $('#'+initialMainNavItem).addClass('active');
            }
        }, 100);
    }

    /**
     * Closes the main navigation layer by click
     *
     * @return void
     */
    $('.closeLayerLink').click(function() {
        $('.mainNavLayerContainer').hide();

        // set initial main nav item
        $('.mainNavItem').removeClass('active');
        $('#'+initialMainNavItem).addClass('active');
    });

    /**
     * Opens the sub navigation layer
     *
     * @return void
     */
    var activateSubNavLayer = function () {

        $(this).parents('ul').find('.navLayer3Level').hide();
        $(this).siblings('.navLayer3Level').show();
        if($(this).siblings('.navLayer3Level').length > 1){
            $(this).siblings('.navLayer3Level.navLayerTeaser').hide();
        }


        $(".nav2LevelCnt").hide();
    };

    /**
     * Adds active class to navigation items
     *
     * @return void
     */
    var addActiveClassToSubNavItems = function () {

        $('*').removeClass('hoverSub');
        $(this).addClass('hoverSub');

        $('.nav2LevelCnt').hide();
        $(this).siblings('.nav2LevelCnt').show();
    };

    // trigger nav layer activation
    $('.mainNavItem').mouseover(activateNavLayer);
    $('.layerSubNavItem').mouseover(activateSubNavLayer);

    // trigger nav layer deactivation
    $('.mainNavItem').parent().mouseout(deactivateNavLayer);

    // trigger main nav layer activation for touch devices
    $('.mainNavItem').on('touchstart', function (e) {
        'use strict'; // satisfy code inspectors
        var link = $(this); // preselect the link

        // check if desktop view port
        // check if layer is activated
        if (link.hasClass('hover') || $(".mainNavLayerContainer").css("position") != "absolute") {
            return true;
        } else {
            link.addClass('hover');
            link.addClass('active');

            activateNavLayer.call(this);

            $('.mainNavItem').not(this).removeClass('hover'); // remove class from all others
            $('.mainNavItem').not(this).removeClass('active'); // remove class from all others
            $('.layerSubNavItem').not(this).removeClass('hover'); // remove class from all others

            e.preventDefault();

            return false; // extra, and to make sure the function has consistent return points
        }
    });

    // trigger sub nav layer activation for touch devices
    $('.layerSubNavItem').on('touchstart', function (e) {
        'use strict'; // satisfy code inspectors
        var link = $(this); // preselect the link

        // check if desktop view port
        // check if layer is activated
        if (link.hasClass('hover') || $(".mainNavLayerContainer").css("position") != "absolute") {
            return true;
        } else {
            link.addClass('hover');

            activateSubNavLayer.call(this);
            $(this).siblings('.nav2LevelCnt').show();

            $('.layerSubNavItem').not(this).removeClass('hover'); // remove class from all others

            e.preventDefault();

            return false; // extra, and to make sure the function has consistent return points
        }
    });

    // trigger active subnavitem
    $('.mainNavLayerContainer').find('.layerSubNavItem').mouseover(addActiveClassToSubNavItems);
};

initializeNavLayer();

/**
 * Opens layer navigation
 *
 * @return void
 */
/*
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
*/
/**
 * Closes layer navigation
 *
 * @return void
 */
/*
var deactivateNavLayer = function() {

    if ($(".navbar-main:hover").length <= 0 && $(".navbar-main > li:hover").length <= 0) {
        $('.dropdown-menu').hide();
    };
}
*/
/**
 * Closes layer navigation when mouseover a menu without submenu
 *
 * @return void
 */
/*
var deactivateNavLayerWithoutSub = function() {

    if ($(".dropdown-menu:hover").length <= 0 && $(".dropdown-menu > li:hover").length <= 0) {
        $('.dropdown-menu').hide();
    };
}
*/
/*
$('.dropdown-toggle').mouseover(activateNavLayer);
$('.dropdown-toggle').parent().mouseout(deactivateNavLayer);
$('a:not(".dropdown-toggle")').mouseover(deactivateNavLayerWithoutSub);
*/