if(typeof layersliderOptions != 'undefined'){
    if($(layersliderOptions).length > 0){
        $.each(layersliderOptions,function(k, v){
            $('#layerslider-'+k).layerSlider(v);
        })
    }
}