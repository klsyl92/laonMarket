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
            $(".float").stop().animate({"top" : ($(window).scrollTop() + 450) + "px"}, 250);
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
    
    
    //수량 증감 //
    $('.minus').click(function(){
        var m = $(this).parent().find('.count').val();
        if(m<=1){m=1;}else{m--;}
        $(this).parent().find('.count').val(m);
        var sumM = parseInt(m*12400);
        $('#sumA').text(sumM+'원');
    });    
    
    $('.plus').click(function(){
        var p = $(this).parent().find('.count').val();
        if(p>=10){p=10;}else{p++;}
        $(this).parent().find('.count').val(p);
        var sumP = parseInt(p*12400);
        $('#sumA').text(sumP+'원');
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
    
    
    //썸네일//
    
    $(document).ready(function() { 
        $('.IT').show();
    });
    
    $('.thumb img').click(function(){
        var i = $(this).parent().index();
        $('.IT').hide();
        $('.Timg li').removeClass('IT');
        $('.Timg li').eq(i).addClass('IT');
        $('.IT').show();
    });
    
    
    //네비기능//
    
     $('.DD').click(function(){
        $('html').animate({scrollTop : ($('#Dinfo').offset().left)}, 10);
    });
    
    $('.RR').click(function(){
        $('html').animate({scrollTop : ($('#Review2').offset().top)}, 10);
    });
    
    $('.CC').click(function(){
        $('html').animate({scrollTop : ($('#Change3').offset().top)}, 10);
    });
    
});