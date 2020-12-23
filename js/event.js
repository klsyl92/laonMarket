$(function(){
    //top, bottom 버튼//
    $('#ST').click(function(){
        $('html').animate({scrollTop: 0},300);
    });
    
    $('#SB').click(function(){
        $('html').animate({scrollTop : ($('footer').offset().top)}, 300);
    });
    
    //탭 메뉴//
    $('#cat>li:nth-child(1), .list').hover(function(){
        $('.list').stop().slideDown(300);
    },function(){
        $('.list').stop().slideUp(300);
    });
    
    //플로팅 바//
    $(window).scroll(function() {
      $(".float").stop().animate({"top" : ($(window).scrollTop() + 450) + "px"}, 300);
   });
    
    

});