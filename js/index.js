$(function(){
    
    //탭 메뉴//
    $('#cat>li:nth-child(1), .list').hover(function(){
        $('.list').stop().slideDown(300);
    },function(){
        $('.list').stop().slideUp(300);
    });
    
    //플로팅 바//
    $(window).scroll(function(){
        if($(window).scrollTop()>=250){
            $(".float").stop().animate({"top" : ($(window).scrollTop() + 450) + "px"}, 300);
        }else{
            
        }
    });
    
    
    //슬라이드//
    var i = 0;
    setInterval(function(){
        if(i>=2){i=0}else{i++}
        $('.slide li').animate({marginLeft:-(i*1600)+"px"},500)
    },4000);
    
    //top, bottom 버튼//
    $('#ST').click(function(){
        $('html').animate({scrollTop: 0},300);
    });
    
    $('#SB').click(function(){
        $('html').animate({scrollTop : ($('footer').offset().top)}, 300);
    });
    
    
});