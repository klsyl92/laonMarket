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
    
    
    //질문 아코디언//
    $('.FAQ li').click(function(){
        var i = $(this).index();
        $('.FAQ li').eq(i+1).slideDown();
    });
    
    $('.QA').click(function(){       
        $(this).slideUp();       
    });
    
    
    //질문카테고리 변경//
    $('.smenu li').click(function(){
        $('.smenu li').removeClass('on');
        /*$(this).siblings('li').removeClass('on');*/
        
        $(this).addClass('on');
        $('#NR').show();
        $('.QA').hide();
    });
    
    $('#FQ').click(function(){
        $('#NR').hide();  
    });
    
    
    //페이지 넘김//
    $('.page span').click(function(){
        $('.page span').removeClass('now');
        $(this).addClass('now');        
    });    
    
    $('#prev').click(function(){        
        var n = $('.now').index();
        if(n<=1){
            n=1;           
           }else{ 
            n--;   
           };
        $('.page span').removeClass('now');
        $('.page span').eq(n-1).addClass('now');
    });
    
    $('#next').click(function(){        
        var n = $('.now').index();
        if(n>=4){
            n=4;           
           }else{
           };
        $('.page span').removeClass('now');
        $('.page span').eq(n).addClass('now'); 
    });
    
    //TOP10 팝업//
    $('.top10 li').click(function(){
        var t = $(this).index();
        $('.pop').show();
        $('.pop>DIV').eq(t).show();         
    });
    
    $('.X').click(function(){
        $('.pop').hide();
        $('.popA').hide();
    });
    
});