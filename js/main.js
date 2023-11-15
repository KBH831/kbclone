$(function(){
    $('.m-menu > li').click(function(e){
        e.preventDefault()
        $('.m-menu > li').find('.s-menu');
        $(this).find('.s-menu').toggle()
    })



    $('.m-slide .play').click(function(){
        $(this).toggleClass('play-start');
        let temp = $(this).hasClass('play-start');
        if(temp) {
           ms.autoplay.stop()
        }else {
            ms.autoplay.start()
        }
    })
    $('.b-slide .play').click(function(){
        $(this).toggleClass('play-start');
        let temp = $(this).hasClass('play-start');
        if(temp) {
           bs.autoplay.stop()
        }else {
            bs.autoplay.start()
        }
    })



    $('.main').click(function(){
        $(this).next().slideToggle().siblings('.sub')
        $(this).find('span').toggleClass('active')
        let s = $('.main').find('span').hasClass('active');
        if(s) {
            $('header').css("overflow-y", "scroll");
        } else {
            $('header').css("overflow-y", "visible");
        }
    })
    $('.footer .family .site').click(function(e){
        e.preventDefault()
        $(this).find('.list').toggle()
    })

    $('.footer .family .fs').click(function(){
        $(this).find('span').toggleClass('mi')
    })
})