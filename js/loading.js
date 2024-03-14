$(document).ready(function(){

  let words=$('title').text();
    $("header").load("header.html");
    $('.keywordSearch').load('search.html');
    $('#main .content>.title').text(words);
    
//datePicker
    let n = $('body').find('.datePicker').length
    for(let i=0;i<n;i++){
        $('body').find('.datepicker').eq(i).prop('id','date'+i);
    }
    
//innerHeight
 $('#main .contentBG').innerHeight($(window).innerHeight()-134);
 if(415 > $(window).outerWidth() ){
    $('#main .contentBG').innerHeight($(window).innerHeight()+60);
 }else if(800 > $(window).outerWidth()){
    $('#main .contentBG').innerHeight($(window).innerHeight());
 }
});