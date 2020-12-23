$(function(){
    //top, bottom 버튼//
    $('#ST').click(function(){
        $('html').animate({scrollTop: 0},300);
    });
    
    $('#SB').click(function(){
        $('html').animate({scrollTop : ($('footer').offset().top)}, 300);
    });
    
    //팝업창 닫음
    $('.cart_icon').click(function(){
        $('#popup').show();
    });

    $('.closePop , .cancel').click(function(){
        $('#popup').hide();                            
    });
    
    $('.prod li a:nth-child(2)').click(function(){
        return false;
    });
});