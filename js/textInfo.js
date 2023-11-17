//text info
  $('.textInfo').click(function(){
    $('.textInfo .info').fadeToggle();
  });
  $('.textInfo span, .textInfo img').mouseover(function(){
    $(this).siblings('.info').addClass('show');
  });
  $('.textInfo span, .textInfo img').mouseout(function(){
    $(this).siblings('.info').removeClass('show');
  });