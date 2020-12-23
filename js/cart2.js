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
    
////////////////////////////////////////////////////     
    function eachCalc(a){
        var c = a.parents('tr').find('.count').val();
        var p = a.parents('tr').find('.price').text();
        var es = parseInt(c) *parseInt(p);
        a.parents('tr').find('.sum').text(es+'원');
     }
    
    
    //수량 증감 //
    $('.minus').click(function(){
        var m = $(this).parent().find('.count').val();
        if(m<=1){m=1;}else{m--;}
        $(this).parent().find('.count').val(m);
        eachCalc($(this));
        allCalc();        
    });    
    
    $('.plus').click(function(){
        var p = $(this).parent().find('.count').val();
        if(p>=10){p=10;}else{p++;}
        $(this).parent().find('.count').val(p);
        eachCalc($(this));
        allCalc();
    });
    
    //삭제 버튼 클릭시 해당 tr삭제//
    $('.del').click(function(){
        $(this).parents('tr').remove();
        eachCalc($(this)); 
        allCalc();
    });
    
    
    //체크 박스 클릭시 계산다시//
    $('table input:checkbox').click(function(){       
        allCalc();
    });
    
          
    function allCalc(){      
            
        var chk = []; 

        var chk_sum = 0 ; 
            
        $('input[name="goods"]:checked').each(function(){
            chk.push(parseInt($(this).parents('tr').find('.sum').text()));
            
            });
       
        
        for (var i=0; i < chk.length; i++ ){
                chk_sum += chk[i];
        };
               
        /*console.log(chk);
        console.log(chk_sum);*/
        
        var TP = 0;    
            if(chk_sum>=30000){TP=0}else{TP=3000};
            
            var DC = 0;
            if(chk_sum>=80000){DC=5000}else{DC=0};    
              
            var total = chk_sum-DC+TP;     
                
        $('#sumA').text(chk_sum+'원'); 
        
        $('#dc').text(DC+'원');
        
        $('#TP').text(TP+'원');  
        
        $('#total').text(total+'원'); 
        
        };
    
    
});

// 배송 & 픽업 1개만 선택 -- jquery 밖에//
    function checkOnlyOne(element) {
  
    const checkboxes 
      = document.getElementsByName("get");
  
    checkboxes.forEach((cb) => {
        cb.checked = false;
    })
  
    element.checked = true;
    }

// 전체선택//
function selectAll(selectAll)  {
        const checkboxes 
            = document.getElementsByName('goods');
  
    checkboxes.forEach((checkbox) => {
        checkbox.checked = selectAll.checked;
    })
        
    }