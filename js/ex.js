$(function(){

$('input[name="items"]').click(function(){
    var i = $(this).parent().index();  //li 의 인덱스 값
    var re1 = $(this).prop('checked');  // 체크 여부
    var re4 = $('input[name="items"]').filter(":checked").length; //체크된 갯수


    var chk = []; // 값을 담을 배열         
    // 체크박스 중에 체크가 된
    // 요소들을 찾아서 chk라는 배열에 담는다.

    var chk_txt2 = 0 ;  //값을 더해서 담을 변수
    // 체크된 요소들의 형제중 txt2 의 텍스트 값을
    // 정수형 숫자로 변환하여 더한다. 
    $('input[name="items"]:checked').each(function(){
        chk.push($(this).siblings('.txt2').text());
        chk_txt2 += parseInt($(this).siblings('.txt2').text());
    });
    console.log(chk);
    console.log(chk_txt2);

});

});