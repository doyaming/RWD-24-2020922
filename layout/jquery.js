new WOW().init();
$(function(){
    $('.nav-menu').find('a').click(function(e){
        e.preventDefault();
        let target = $(this).data('target');
        if(target == 0){
            return;
        }
        let offset = $(target).offset().top;
        $('html,body').animate({
            scrollTop: offset
        });
       
    })
    $('#gotop').click(function(e){
        $('html,body').animate({
            scrollTop: 0
        })
        e.preventDefault();
    })
    $('.nav-button').click(function(){
        $('.nav-toggle-menu').toggleClass('active');
    })
})