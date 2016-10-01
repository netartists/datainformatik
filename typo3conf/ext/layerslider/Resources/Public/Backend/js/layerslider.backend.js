var transitionSetElement = "";

var timeLineObjects = new Array();

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
    setCopySlideButtons();
    setCopyLayerButtons();
    initDatePicker();
    $(document.body).tooltip({ selector: ".panel-footer a" });
    $('select.item-content-type').each(function(){
        toggleLayerContentType(this);
    });
    setWizardOption();

});

function toggleOptions(){
	$(".layerslider-item-slider-options").animate({height: "toggle"});
	return false;
}

function initDatePicker(){
    $('.input-group.date').datetimepicker({
        format: 'D.M.YYYY HH:mm',
        sideBySide: true,
        allowInputToggle: true,
        showClear: true,
        showClose: true,
        showTodayButton: true,
        toolbarPlacement: 'bottom'
    });
}



function copySlide(e){
    var slideUid = $(e).data('slideuidulement');
    $('a.copyStop').hide();
    $('a.copyStart').show();
    if( parseInt($.cookie('copySlide')) == parseInt(slideUid)){
        $.removeCookie('copySlide', { path: '/' });
        $('*[data-copyslide-uid="'+slideUid+'"]').show();
        $('*[data-stopcopyslide-uid="'+slideUid+'"]').hide();
        setCopySlideButtons();
    } else {
        $.cookie('copySlide', slideUid,  { expires: 1, path: '/' });
        $('*[data-copyslide-uid="'+slideUid+'"]').hide();
        $('*[data-stopcopyslide-uid="'+slideUid+'"]').show();
        setCopySlideButtons();
    }
}

function setCopySlideButtons(){
    var copySlide = $.cookie('copySlide');
    if(copySlide !== undefined){
        $('.pasteSlide').show();
        $('*[data-copyslide-uid="'+copySlide+'"]').hide();
        $('*[data-stopcopyslide-uid="'+copySlide+'"]').show();
    } else {
        $('.pasteSlide').hide();
    }
}
function pasteSlide(e){
    var url = $(e).attr('href');
    url = url+'&tx_layerslider_web_layersliderm1[slide]='+$.cookie('copySlide');
    $.ajax({
        type: "GET",
        url: url,
    }).done(function( data ) {

        $(e).closest('form').submit();

        //if($(e).closest('.layerslider-slideitem').length == 0){
        //    $(e).closest('.sortable').append(data);
        //} else {
        //    $(e).closest('.layerslider-slideitem').after(data);
        //}
        //setCopySlideButtons();
        //$('select.item-content-type').each(function(){
        //    toggleLayerContentType(this);
        //});

    });
    return false;
}


function copyLayer(e){
    var layerUid = $(e).data('layeruidelement');
    $('a.copyLayerStop').hide();
    $('a.copyLayerStart').show();
    if( parseInt($.cookie('copyLayer')) == parseInt(layerUid)){
        $.removeCookie('copyLayer', { path: '/' });
        $('*[data-copylayer-uid="'+layerUid+'"]').show();
        $('*[data-stopcopylayer-uid="'+layerUid+'"]').hide();
        setCopyLayerButtons();
    } else {
        $.cookie('copyLayer', layerUid,  { expires: 1, path: '/' });
        $('*[data-copylayer-uid="'+layerUid+'"]').hide();
        $('*[data-stopcopylayer-uid="'+layerUid+'"]').show();
        setCopyLayerButtons();
    }
}

function setCopyLayerButtons(){
    var copyLayer = $.cookie('copyLayer');
    if(copyLayer !== undefined){
        $('.pasteLayer').show();
        $('*[data-copylayer-uid="'+copyLayer+'"]').hide();
        $('*[data-stopcopylayer-uid="'+copyLayer+'"]').show();
    } else {
        $('.pasteLayer').hide();
    }
}
function pasteLayer(e){
    var url = $(e).attr('href');
    url = url+'&tx_layerslider_web_layersliderm1[item]='+$.cookie('copyLayer');
    //console.log(url);
    $.ajax({
        type: "GET",
        url: url,
    }).done(function( data ) {

        $(e).closest('form').submit();

        //if($(e).closest('.layerslider-itemitem').length == 0){
        //    $(e).closest('.layerslider-item').after(data);
        //} else {
        //    $(e).closest('.layerslider-itemitem').after(data);
        //}
        //setCopyLayerButtons();
        //$('select.item-content-type').each(function(){
        //    toggleLayerContentType(this);
        //});

    });

    return false;

}


function newSlide(e){
	$.ajax({
		type: "GET",
		url: $(e).prop("href"),
	}).done(function( data ) {
		$(".layerslider-item-slides-area .sortable").append(data);
        initDatePicker();
		$(data).find("script").each(function(i) {
        	// eval($(this).text());
        });
	});

	return false;
}

function newItem(e, target){
    $.ajax({
        type: "GET",
        url: $(e).prop("href"),
        dataType: 'html'
    }).done(function( data ) {
            $(target).append(data);
            initDatePicker();
            $(data).find("script").each(function(i) {
                // eval($(this).text());
            });
        });

    return false;
}

function storeCollapseCookie(id){
    if($.cookie(id) ){
        $.removeCookie(id);
    } else {
        $.cookie(id, true);
    }
}

function storeTabsCookie(id, tab){
    $.cookie(id, tab);
}

function updatePositionArea(targetStage, sourceSettings){
    $(sourceSettings).each(function(){
        var itemUid = $(this).data('uid');
        var contentType = $(".item-content-type option:selected", this).val();
        var content = $('*[data-element="content"]', this);
        $(targetStage + " #" + $(content).data("layerid") ).remove();

        if(contentType == 'h1'){
            placeElement( $("<h1 />"), content, this, targetStage, false );
        }
        if(contentType == 'h2'){
            placeElement( $("<h2 />"), content, this, targetStage, false );
        }
        if(contentType == 'h3'){
            placeElement( $("<h3 />"), content, this, targetStage, false );
        }
        if(contentType == 'h4'){
            placeElement( $("<h4 />"), content, this, targetStage, false );
        }
        if(contentType == 'h5'){
            placeElement( $("<h5 />"), content, this, targetStage, false );
        }
        if(contentType == 'h6'){
            placeElement( $("<h6 />"), content, this, targetStage, false );
        }
        if(contentType == 'paragraph'){
            placeElement( $("<p />"), content, this, targetStage, false );
        }
        if(contentType == 'span'){
            placeElement( $("<span />"), content, this, targetStage, false );
        }
        if(contentType == 'html'){
            placeElement( $("<div />"), content, this, targetStage, false );
        }

        if(contentType == 'image'){
            placeElement( $("<img />"), content, this, targetStage , true);
        }



    });

    function placeElement(newElement, content, e, targetStage, img){
        //console.log(e);
        if(img === true){
            newElement.attr("src", $('*[data-element="image-content"]', e).data('itemurl'));
        } else {
            newElement.html( $('*[data-element="content"]', e).val());
        }
        newElement.css({
            position: "absolute",
            left: $('*[data-element="left"]', e).val()+"px",
            top: $('*[data-element="top"]', e).val()+"px",
            width: function(){
                if( $('*[data-element="width"]', e).val().length > 0 ){
                    return $('*[data-element="width"]', e).val()+"px";
                }
            },
            textAlign: function(){
                if( $('*[data-element="textalign"] option:selected', e).val().length > 0 ){
                    return $('*[data-element="textalign"] option:selected', e).val();
                }
            },
            fontSize: function(){
                if( $('*[data-element="fontsize"]', e).val().length > 0 ){
                    return $('*[data-element="fontsize"]', e).val()+"px";
                }
            },
            color: function(){
                if( $('*[data-element="fontcolor"]', e).val().length > 0 ){
                    return $('*[data-element="fontcolor"]', e).val();
                }
            },
            backgroundColor: function(){
                if( $('*[data-element="backgroundcolor"]', e).val().length > 0 ){
                    return $('*[data-element="backgroundcolor"]', e).val();
                }
            },
            paddingRight: function(){
                if( $('*[data-element="paddingright"]', e).val().length > 0 ){
                    return $('*[data-element="paddingright"]', e).val()+"px";
                }
            },
            paddingTop: function(){
                if( $('*[data-element="paddingtop"]', e).val().length > 0 ){
                    return $('*[data-element="paddingtop"]', e).val()+"px";
                }
            },
            paddingBottom: function(){
                if( $('*[data-element="paddingbottom"]', e).val().length > 0 ){
                    return $('*[data-element="paddingbottom"]', e).val()+"px";
                }
            },
            paddingLeft: function(){
                if( $('*[data-element="paddingleft"]', e).val().length > 0 ){
                    return $('*[data-element="paddingleft"]', e).val()+"px";
                }
            },
            borderTop: function(){
                if( $('*[data-element="bordertop"]', e).val().length > 0 ){
                    return $('*[data-element="bordertop"]', e).val();
                }
            },
            borderRight: function(){
                if( $('*[data-element="borderright"]', e).val().length > 0 ){
                    return $('*[data-element="borderright"]', e).val();
                }
            },
            borderBottom: function(){
                if( $('*[data-element="borderbottom"]', e).val().length > 0 ){
                    return $('*[data-element="borderbottom"]', e).val();
                }
            },
            borderLeft: function(){
                if( $('*[data-element="borderleft"]', e).val().length > 0 ){
                    return $('*[data-element="borderleft"]', e).val();
                }
            }

        }).prop("id", $(content).data("layerid")).addClass("candrag").addClass("ls-s3");

        var dataLs = "";

        var effectSettings = $('#effect-settings-'+$(e).data('uid'));

        if( $('*[data-element="fade"]', effectSettings).val().length > 0 ){
            dataLs = dataLs+'fadein:'+$('*[data-element="fade"]', effectSettings).val()+";";
        }
        if( $('*[data-element="offsetxin"]', effectSettings).val() == 'number' ){
            dataLs = dataLs+'offsetxin:'+$('*[data-element="offsetxinnumber"]', effectSettings).val()+";";
        } else {
            dataLs = dataLs+'offsetxin:'+$('*[data-element="offsetxin"]', effectSettings).val()+";";
        }
        if( $('*[data-element="offsetyin"]', effectSettings).val() == 'number' ){
            dataLs = dataLs+'offsetyin:'+$('*[data-element="offsetyinnumber"]', effectSettings).val()+";";
        } else {
            dataLs = dataLs+'offsetyin:'+$('*[data-element="offsetyin"]', effectSettings).val()+";";
        }
        if( $('*[data-element="transitioninduration"]', effectSettings).val().length > 0 ){
            dataLs = dataLs+'durationin:'+$('*[data-element="transitioninduration"]', effectSettings).val()+";";
        }
        if( $('*[data-element="transitionineasing"]', effectSettings).val().length > 0 ){
            dataLs = dataLs+'easingIn:'+$('*[data-element="transitionineasing"]', effectSettings).val()+";";
        }
        if( $('*[data-element="transitionindelay"]', effectSettings).val().length > 0 ){
            dataLs = dataLs+'delayIn:'+$('*[data-element="transitionindelay"]', effectSettings).val()+";";
        }
        if( $('*[data-element="transitioninscalex"]', effectSettings).val().length > 0 ){
            dataLs = dataLs+'scalexin:'+$('*[data-element="transitioninscalex"]', effectSettings).val()+";";
        }
        if( $('*[data-element="transitioninscaley"]', effectSettings).val().length > 0 ){
            dataLs = dataLs+'scaleyin:'+$('*[data-element="transitioninscaley"]', effectSettings).val()+";";
        }
        if( $('*[data-element="transitioninskewx"]', effectSettings).val().length > 0 ){
            dataLs = dataLs+'skewxin:'+$('*[data-element="transitioninskewx"]', effectSettings).val()+";";
        }
        if( $('*[data-element="transitioninskewy"]', effectSettings).val().length > 0 ){
            dataLs = dataLs+'skewyin:'+$('*[data-element="transitioninskewy"]', effectSettings).val()+";";
        }
        if( $('*[data-element="transitioninrotation"]', effectSettings).val().length > 0 ){
            dataLs = dataLs+'rotatein:'+$('*[data-element="transitioninrotation"]', effectSettings).val()+";";
        }
        if( $('*[data-element="transitioninrotationx"]', effectSettings).val().length > 0 ){
            dataLs = dataLs+'rotatexin:'+$('*[data-element="transitioninrotationx"]', effectSettings).val()+";";
        }
        if( $('*[data-element="transitioninrotationy"]', effectSettings).val().length > 0 ){
            dataLs = dataLs+'rotateyin:'+$('*[data-element="transitioninrotationy"]', effectSettings).val()+";";
        }
        if( $('*[data-element="fadeout"]', effectSettings).val().length > 0 ){
            dataLs = dataLs+'fadeout:'+$('*[data-element="fadeout"]', effectSettings).val()+";";
        }
        if( $('*[data-element="offsetxout"]', effectSettings).val() == 'number' ){
            dataLs = dataLs+'offsetxout:'+$('*[data-element="offsetxoutnumber"]', effectSettings).val()+";";
        } else {
            dataLs = dataLs+'offsetxout:'+$('*[data-element="offsetxout"]', effectSettings).val()+";";
        }
        if( $('*[data-element="offsetyout"]', effectSettings).val() == 'number' ){
            dataLs = dataLs+'offsetyout:'+$('*[data-element="offsetyoutnumber"]', effectSettings).val()+";";
        } else {
            dataLs = dataLs+'offsetyout:'+$('*[data-element="offsetyout"]', effectSettings).val()+";";
        }
        if( $('*[data-element="transitionoutduration"]', effectSettings).val().length > 0 ){
            dataLs = dataLs+'durationout:'+$('*[data-element="transitionoutduration"]', effectSettings).val()+";";
        }
        if( $('*[data-element="transitionouteasing"]', effectSettings).val().length > 0 ){
            dataLs = dataLs+'easingOut:'+$('*[data-element="transitionouteasing"]', effectSettings).val()+";";
        }
        if( $('*[data-element="transitionoutscalex"]', effectSettings).val().length > 0 ){
            dataLs = dataLs+'scalexout:'+$('*[data-element="transitionoutscalex"]', effectSettings).val()+";";
        }
        if( $('*[data-element="transitionoutscaley"]', effectSettings).val().length > 0 ){
            dataLs = dataLs+'scaleyout:'+$('*[data-element="transitionoutscaley"]', effectSettings).val()+";";
        }
        if( $('*[data-element="transitionoutskewx"]', effectSettings).val().length > 0 ){
            dataLs = dataLs+'skewxout:'+$('*[data-element="transitionoutskewx"]', effectSettings).val()+";";
        }
        if( $('*[data-element="transitionoutskewy"]', effectSettings).val().length > 0 ){
            dataLs = dataLs+'skewyout:'+$('*[data-element="transitionoutskewy"]', effectSettings).val()+";";
        }
        if( $('*[data-element="transitionoutrotation"]', effectSettings).val().length > 0 ){
            dataLs = dataLs+'rotateout:'+$('*[data-element="transitionoutrotation"]', effectSettings).val()+";";
        }
        if( $('*[data-element="transitionoutrotationx"]', effectSettings).val().length > 0 ){
            dataLs = dataLs+'rotatexout:'+$('*[data-element="transitionoutrotationx"]', effectSettings).val()+";";
        }
        if( $('*[data-element="transitionoutrotationy"]', effectSettings).val().length > 0 ){
            dataLs = dataLs+'rotateyout:'+$('*[data-element="transitionoutrotationy"]', effectSettings).val()+";";
        }
        if( $('*[data-element="showuntil"]', effectSettings).val().length > 0 ){
            dataLs = dataLs+'showuntil:'+$('*[data-element="showuntil"]', effectSettings).val()+";";
        }
        if( $('*[data-element="parallaxlevel"]', effectSettings).val().length > 0 ){
            dataLs = dataLs+'parallaxlevel:'+$('*[data-element="parallaxlevel"]', effectSettings).val()+";";
        }
        if( $('*[data-element="distance"]', effectSettings).val().length > 0 ){
            dataLs = dataLs+'distance:'+$('*[data-element="distance"]', effectSettings).val()+";";
        }



        //console.log(dataLs);
        newElement.data('ls', dataLs);

        if( $('*[data-element="cssstyle"]', e).val().length > 0 ){
            $( newElement.attr("style", newElement.attr("style") + $('*[data-element="cssstyle"]', e).val() ) );
        }

        if( $('*[data-element="cssclass"]', e).val().length > 0 ){
            $( newElement.addClass( $('*[data-element="cssclass"]', e).val() ));
        }

        $(targetStage + " .ls-slide").append(newElement);
    }

    connectDragableElementsToArea();

}

function toggleLayerContentType(select){
    if($('option:selected', select).val() == 'image'){
        $('div[data-itemimage="'+$(select).data('item')+'"]').show();
        $('div[data-itemcontenttext="'+$(select).data('item')+'"]').hide();
    } else {
        $('div[data-itemimage="'+$(select).data('item')+'"]').hide();
        $('div[data-itemcontenttext="'+$(select).data('item')+'"]').show();
    }
}

function deleteSlide(e){
    $('#delete-slide-'+$(e).data('uid')).modal('hide');

	$.ajax({
		type: "GET",
		url: $(e).prop("href"),
	}).done(function( data ) {
		$(e).closest(".layerslider-slideitem").fadeOut(function(){
			$(this).remove();
            if( parseInt($.cookie('copySlide')) == $(e).data('uid')){
                $.removeCookie('copySlide', { path: '/' });
                $('*[data-copyslide-uid="'+$(e).data('uid')+'"]').show();
                $('*[data-stopcopyslide-uid="'+$(e).data('uid')+'"]').hide();
                setCopySlideButtons();
            }

		});
	});

	return false;
}
function deleteItem(e){
    $('#delete-item-'+$(e).data('uid')).modal('hide');

    $.ajax({
        type: "GET",
        url: $(e).prop("href"),
    }).done(function( data ) {
            $(e).closest(".layerslider-itemitem").fadeOut(function(){
                $(this).remove();
                if( parseInt($.cookie('copyLayer')) == $(e).data('uid')){
                    $.removeCookie('copyLayer', { path: '/' });
                    $('*[data-copylayer-uid="'+$(e).data('uid')+'"]').show();
                    $('*[data-stopcopylayer-uid="'+$(e).data('uid')+'"]').hide();
                    setCopyLayerButtons();
                }

            });
        });

    return false;
}

function handleTransitions(e){
    $('#transitionPanel').modal('show')
	transitionSetElement = e;
	var tr2dList = $(e).next().val();
	var tr2dListArray = tr2dList.split(",");

	var tr3dList = $(e).next().next().val();
	var tr3dListArray = tr3dList.split(",");

	$("#ls-transition-gallery .2d a").each(function(){
		$("i", this).hide();
		var eProp = $(this).prop("rel");
		eProp = eProp.replace("tr", "");
		if( $.inArray(eProp, tr2dListArray) > -1 ){
			$("i", this).show();
		}
	});

	$("#ls-transition-gallery .3d a").each(function(){
		$("i", this).hide();
		var eProp = $(this).prop("rel");
		eProp = eProp.replace("tr", "");
		if( $.inArray(eProp, tr3dListArray) > -1 ){
			$("i", this).show();
		}
	});

}

function setTransition(tElement){
	if( $("i", tElement).is(":visible") ){
		$("i", tElement).hide();
	} else {
		$("i", tElement).show();
	}
	var tr2dString = "";
	var tr3dString = "";
	var thisRel = "";
	var i = 0;
	$("#ls-transition-gallery .2d i:visible").each(function(){
		var thisRel = $(this).parent().prop("rel") ;
		thisRel = thisRel.replace("tr", "");
		tr2dString = tr2dString + thisRel+",";
		i = i+1;
	});

	$(transitionSetElement).next().val( tr2dString.slice(0, tr2dString.length-1) );

	$("#ls-transition-gallery .3d i:visible").each(function(){
		var thisRel = $(this).parent().prop("rel") ;
		thisRel = thisRel.replace("tr", "");
		tr3dString = tr3dString + thisRel+",";
		i = i+1;
	});

	$(transitionSetElement).next().next().val( tr3dString.slice(0, tr3dString.length-1) );

	$("span", transitionSetElement).html( i );

}




function createTimelineInstance(sliderUid, slideUid){

    if(typeof timeLineObjects[slideUid] !== 'undefined'){
        timeLineObjects[slideUid].kill();
    }
    var slideData = extractDataLsData($('.stage-'+slideUid+' .ls-slider-'+sliderUid+'-slide-'+slideUid+'').data('ls'));

    var layerSliderInitData = ($('#layerslider-'+sliderUid).layerSlider('userInitData'));
    if(slideData.slideDelay) {
        var slideDuration = (slideData.slideDelay / 1000);
    } else if (layerSliderInitData.slideDelay > 0) {
        var slideDuration = (layerSliderInitData.slideDelay / 1000);
    } else {
        slideDuration = 4;
    }
    var slideDurationIn = 0;
    var slideDurationOut = 1;

    timeLineObjects[slideUid]  = new TimelineLite();
    var fakeEl = $('<div />');
    timeLineObjects[slideUid].from(fakeEl, slideDuration, {}, 0).startTime(0);

    var layerDurationOptions = [];

    var slidesCount = $('#layerslider-'+sliderUid+' .ls-slide').length;

    $('.stage-'+slideUid+' .ls-slider-'+sliderUid+'-slide-'+slideUid+' > *').each(function (i,e) {

        var elem = $(this);
        //console.log(elem);
        layerDurationOptions[i] = [];
        layerDurationOptions[i]['reference'] = '.duration-'+elem.attr('id');

        var elemOffset = elem.position();
        elem.css("width", (elem.width() + 1) + 'px');
        elem.css("height", (elem.height() + 1) + 'px');

        var layerData = extractDataLsData(elem.data('ls'));
        //console.log(layerData);
        var gsOptions = {};
        var durationIn = 1;
        var durationOut = 1;
        var delayIn = 0 + slideDurationIn;

        if (layerData.fadein == 'true') {
            gsOptions.opacity = 0;
        }
        if (layerData.durationin) {
            durationIn = parseInt(layerData.durationin) / 1000;
        }
        if (layerData.easingIn) {
            gsOptions.ease = layerData.easingIn;
        }
        if (layerData.offsetxin) {
            if (layerData.offsetxin == 'left') {
                gsOptions.x = -( (elem.outerWidth() + elemOffset.left ));
            }
            else if (layerData.offsetxin == 'right') {
                gsOptions.x = ( (elem.outerWidth() / 2 ) + elem.parent().width() );
            }
            else {
                gsOptions.x = layerData.offsetxin;
            }
        }
        if (layerData.offsetyin) {
            if (layerData.offsetyin == 'top') {
                gsOptions.y = -( (elem.outerHeight() + 141 ) + elemOffset.top);
                gsOptions.z = 0.01;
            }
            else if (layerData.offsetyin == 'bottom') {
                gsOptions.y = elem.parent().outerHeight() + 100;
                gsOptions.z = 0.01;
            }
            else {
                gsOptions.y = layerData.offsetyin;
            }
        }
        if (layerData.delayIn) {
            delayIn = (parseInt(layerData.delayIn) / 1000)+slideDurationIn;
        }
        if (layerData.rotatexin) {
            gsOptions.rotationX = parseInt(layerData.rotatexin)
        }
        if (layerData.rotateyin) {
            gsOptions.rotationY = parseInt(layerData.rotateyin)
        }
        if (layerData.rotatein) {
            gsOptions.rotation = parseInt(layerData.rotatein)
        }
        if (layerData.scalexin) {
            gsOptions.scaleX = parseInt(layerData.scalexin)
        }
        if (layerData.scaleyin) {
            gsOptions.scaleY = parseInt(layerData.scaleyin)
        }
        if (layerData.skewxin) {
            gsOptions.skewX = parseInt(layerData.skewxin)
        }
        if (layerData.skewyin) {
            gsOptions.skewY = parseInt(layerData.skewyin)
        }
        gsOptions.onUpdate = function(){
          $(elem).addClass('transition-running');
        };
        gsOptions.onComplete = function(){
            $(elem).removeClass('transition-running');
        };
        timeLineObjects[slideUid].from(elem, durationIn, gsOptions, delayIn).startTime(0);

        layerDurationOptions[i]['delayIn'] = delayIn;
        layerDurationOptions[i]['durationIn'] = durationIn;

        if((slidesCount > 1) || (parseInt(layerData.showuntil) > 0)){
            var durationOut = 1;
            var showUntil = slideDuration;
            var geOptions = {};

            if (layerData.fadeout == 'true') {
                geOptions.opacity = 0;
            }
            if (layerData.easingOut) {
                geOptions.ease = layerData.easingOut;
            }
            if (layerData.durationout) {
                durationOut = (parseInt(layerData.durationout) / 1000);
            }
            if (layerData.showuntil) {
                showUntil = delayIn + durationIn + (parseInt(layerData.showuntil) / 1000); //+durationOut+delayIn-slideDurationIn;
            }
            if (layerData.offsetxout) {
                if (layerData.offsetxout == 'left') {
                    geOptions.x = -( (elem.outerWidth() + elemOffset.left ));
                }
                else if (layerData.offsetxout == 'right') {
                    geOptions.x = ( (elem.outerWidth() / 2 ) + elem.parent().width() );
                }
                else {
                    geOptions.x = layerData.offsetxout;
                }
            }
            if (layerData.offsetyout) {
                if (layerData.offsetyout == 'top') {
                    geOptions.y = -( (elem.outerHeight() + 141 ) + elemOffset.top);
                    geOptions.z = 0.01;
                }
                else if (layerData.offsetyout == 'bottom') {
                    geOptions.y = elem.parent().outerHeight() + 100;
                    geOptions.z = 0.01;
                }
                else {
                    geOptions.y = layerData.offsetyout;
                }
            }
            if (layerData.rotatexout) {
                geOptions.rotationX = parseInt(layerData.rotatexout)
            }
            if (layerData.rotateyout) {
                geOptions.rotationY = parseInt(layerData.rotateyout)
            }
            if (layerData.rotateout) {
                geOptions.rotation = parseInt(layerData.rotateout)
            }
            if (layerData.scalexout) {
                geOptions.scaleX = parseInt(layerData.scalexout)
            }
            if (layerData.scaleyout) {
                geOptions.scaleY = parseInt(layerData.scaleyout)
            }
            if (layerData.skewxout) {
                geOptions.skewX = parseInt(layerData.skewxout)
            }
            if (layerData.skewyout) {
                geOptions.skewY = parseInt(layerData.skewyout)
            }
            layerDurationOptions[i]['showUntil'] = showUntil;
            layerDurationOptions[i]['durationOut'] = durationOut;

            geOptions.onUpdate = function(){
                $(elem).addClass('transition-running');
            };
            geOptions.onComplete = function(){
                $(elem).removeClass('transition-running');
            };
            geOptions.onReverseComplete = function(){
                $(elem).removeClass('transition-running');
            };



            timeLineObjects[slideUid].to(elem, durationOut, geOptions, showUntil).startTime(0);
        }

        //console.log('Total-Time:'+ (durationIn));
        //$('#slider-'+slideUid+' > div:eq('+(i+1)+')').css({width: '10%'});


    });
    //console.log(tl);

    $("#play-"+slideUid).click(function () {
        timeLineObjects[slideUid].play();
    });

    $("#pause-"+slideUid).click(function () {
        timeLineObjects[slideUid].pause();
    });

    $("#reverse-"+slideUid).click(function () {
        timeLineObjects[slideUid].reverse();
    });

    $("#resume-"+slideUid).click(function () {
        timeLineObjects[slideUid].resume();
    });

    $("#stagger-"+slideUid).click(function () {
        timeLineObjects[slideUid].play("stagger");
    });

    $("#restart-"+slideUid).click(function () {
        timeLineObjects[slideUid].restart();
    });

    timeLineObjects[slideUid].eventCallback("onUpdate", updateSlider);

    if(slidesCount > 1){
        var sliderLength = ((100 / timeLineObjects[slideUid].totalDuration()) * slideDuration);
    } else {
        var sliderLength = 100;
    }
    $('.slideDuration-'+slideUid).css({
        width: sliderLength+'%',
        left: ((100 / (timeLineObjects[slideUid].totalDuration())) * slideDurationIn)+'%'
    });

    $('.tlhide').removeClass('tlhidden');
    $('.duration-alert-'+slideUid).hide();
    if(sliderLength < 100){
        //$('.duration-alert-'+slideUid).show();
    }
    $("#slider-"+slideUid).slider({
        range: false,
        min: 0,
        max: 100,
        step: .1,
        slide: function (event, ui) {
            timeLineObjects[slideUid].pause();
            //adjust the timeline's progress() based on slider value
            timeLineObjects[slideUid].progress(ui.value / 100);
        }
    });

    //console.log(layerDurationOptions);

    for(i = 0; i < layerDurationOptions.length; i++){
        var options = layerDurationOptions[i];
        $(options.reference).css({width: (100 / (timeLineObjects[slideUid].totalDuration() / (options.durationIn + options.durationOut + (options.showUntil - options.durationIn)) ))+'%' });

        //if(options.delayIn > 0){
            $(options.reference).css({marginLeft: (100 / (timeLineObjects[slideUid].totalDuration() / (options.delayIn))+'%') });
            $(options.reference).css({width: ((100 / (timeLineObjects[slideUid].totalDuration() / (options.durationIn + options.durationOut + (options.showUntil - options.durationIn)) )) - (100 / (timeLineObjects[slideUid].totalDuration() / (options.delayIn))))+'%' });
        //}
        if(slidesCount > 1){
            $(options.reference).css({background:'linear-gradient(90deg, #09a100 '+(options.durationIn / (options.durationIn + options.durationOut + (options.showUntil - options.durationIn - options.delayIn)) * 100)+'%, #00D200 1px, #00D200 '+(100 -((options.durationOut / (options.durationIn + options.durationOut + (options.showUntil - options.durationIn - options.delayIn)) * 100)))+'%, #09a100 1px)'});
        } else {
            if(options.showUntil > (options.durationIn + options.delayIn)){
                $(options.reference).css({background:'linear-gradient(90deg, #09a100 '+(options.durationIn / timeLineObjects[slideUid].totalDuration() * 100)+'%, #00D200 1px, #00D200 '+(100 -((options.durationOut / (options.durationIn + options.durationOut + (options.showUntil - options.durationIn - options.delayIn)) * 100)))+'%, #09a100 1px)'});
            } else {
                $(options.reference).css({background:'linear-gradient(90deg, #09a100 '+(options.durationIn / timeLineObjects[slideUid].totalDuration() * 100)+'%, #00D200 1px, #00D200 100%, #09a100 1px)'});
            }

        }
    }


    timeLineObjects[slideUid].progress(1);

    $("#slider-"+slideUid+' .ui-slider-handle').css({bottom:  37 + (21 * $('.stage-'+slideUid+' .ls-slider-'+sliderUid+'-slide-'+slideUid+' > *').length)});


    /**
     *
     */
    function updateSlider() {
        $("#slider-"+slideUid).slider("value", timeLineObjects[slideUid].progress() * 100);
        $('.timer-'+slideUid).html((timeLineObjects[slideUid].time().toFixed(2)));
    }


    /**
     *
     * @param theString
     * @returns {Array}
     */
    function extractDataLsData(theString){
        var optionsArray = {};

        $.each(theString.split(';'), function (i, e) {
            var trimE = $.trim(e);
            var valueArray = trimE.split(':');
            optionsArray[$.trim(valueArray[0])] = $.trim(valueArray[1]);
        })

        return optionsArray;
    }
}

function hideTimeLineObject(slide, layer, el){
    if($(el).hasClass('tlhidden')){
        $(el).removeClass('tlhidden');
        $('.layer-item-position-stage #layer-'+slide+'-'+layer).css({visibility: 'visible'});
    } else {
        $(el).addClass('tlhidden');

        $('.layer-item-position-stage #layer-'+slide+'-'+layer).css({visibility: 'hidden'});
    }
}

function setWizardOption(){
    $('.wizard-option').click(function(){
        $('.wizard-option-check', this).prop("checked", true);
        $('.wizard-option', $(this).closest('.wizard-option-wrapper')).removeClass('wizard-option-active');
        $(this).addClass('wizard-option-active');

    })
}


function showEffectSettings(layer, el){
    if($(el).hasClass('eseditActive')){
        $(el).removeClass('eseditActive');
        $('#effect-settings-'+layer).hide();
    } else {
        $('.effect-settings-general').hide();
        $('.fa-pencil.esedit').removeClass('eseditActive');
        $(el).addClass('eseditActive');

        $('#effect-settings-'+layer).show();
    }
}

function makeSlideImagesSortable() {
    $('.image-wrapper-sortable').sortable({
        handle: '.fa-arrows',
        items: ' > .wizard-image-wrapper',
        stop: function () {
            setImageUids();
        }
    });
    setImageUids();
}

function removeWizardImage(e) {
    $(e).closest('.wizard-image-wrapper').fadeOut('fast', function () {
        $(this).remove();
        setImageUids();
    })
}

function setImageUids() {
    var uidList = "";
    $('.wizard-image-wrapper > img').each(function () {
        uidList = uidList + $(this).data('uid') + ",";
    });
    $('#uidImageList').val(uidList);
}


function connectDragableElementsToArea(slideUid){
    var draggableAreaDrag = $( ".candrag" ).draggable({
        start: function(event, ui){
            if($(this).hasClass('transition-running')){
                $('#notDragable').modal('show');
                return false;
            }
            buildHelperBoxes(this, slideUid);
        },
        drag: function(event, ui){
            var position = $(this).position();
            $(topHelper).height((position.top-1));
            $(bottomHelper).height( ($('div[data-slidePoitioningLayer="'+slideUid+'"]').height()- position.top) - $(this).outerHeight()-1);
            $(leftHelper).width((position.left-1));
            $(rightHelper).width( $('div[data-slidePoitioningLayer="'+slideUid+'"]').width() - position.left - $(this).outerWidth() -1 );
        },
        stop: function(event, ui){
            var theId = $(this).prop("id");
            $("#"+theId+"-left").val(ui.position.left);
            $("#"+theId+"-top").val(ui.position.top);
            $(topHelper).remove();
            $(bottomHelper).remove();
            $(leftHelper).remove();
            $(rightHelper).remove();
        },
        containment: "parent"
    });

    $('.candrag > img').parent().resizable({
        aspectRatio: true,
        containment: "parent",
        stop:function(){
            var theId = $(this).prop("id");
            $("#"+theId+"-width").val($(this).width());
            $(topHelper).remove();
            $(bottomHelper).remove();
            $(leftHelper).remove();
            $(rightHelper).remove();
        },
        start: function(){
            if($(this).hasClass('transition-running')){
                $('#notDragable').modal('show');
                return false;
            }

            buildHelperBoxes($(this), slideUid);
        },
        resize: function(){
            if($(this).hasClass('transition-running')){
                return false;
            }
            var position = $(this).position();
            $(topHelper).height((position.top-1));
            $(bottomHelper).height( ($('div[data-slidePoitioningLayer="'+slideUid+'"]').height()- position.top) - $(this).height()-1);
            $(leftHelper).width((position.left-1));
            $(rightHelper).width( $('div[data-slidePoitioningLayer="'+slideUid+'"]').width() - position.left - $(this).width() -1 );
        }
    });
}

function buildHelperBoxes(target, slideUid){
    topHelper = $('<div />').css({
        position: 'absolute',
        width: '100%',
        height: '0',
        background: 'rgba(0,0,0,0.3)',
        borderBottom: '1px dashed green'
    });
    var topHelperMeasure = $('<span />').css({
        position: 'absolute',

    });
    bottomHelper = $('<div />').css({
        position: 'absolute',
        width: '100%',
        height: '0',
        bottom: 0,
        top: 'auto',
        background: 'rgba(0,0,0,0.3)',
        borderTop: '1px dashed green'
    });
    leftHelper = $('<div />').css({
        position: 'absolute',
        width: '0',
        height: $('img[data-imageforslide="'+slideUid+'"]').height(),
        top: '0',
        background: 'rgba(0,0,0,0.3)',
        borderRight: '1px dashed green'
    });
    rightHelper = $('<div />').css({
        position: 'absolute',
        width: '0',
        height: $('img[data-imageforslide="'+slideUid+'"]').height(),
        top: '0',
        right: '0',
        left: 'auto',
        background: 'rgba(0,0,0,0.3)',
        borderLeft: '1px dashed green'
    });
    $(target).before(topHelper);
    $(target).before(bottomHelper);
    $(target).before(leftHelper);
    $(target).before(rightHelper);

}

function makeSlideItemListSortable(slideUid){
    $( ".slide-item-list-"+slideUid )
        .sortable({
            handle: ".sort-handle",
            stop: function(){
                $('.sortable-value', $( ".slide-item-list-"+slideUid )).each(function(i,e){
                    $(this).val(i);
                });
            }
        });
}