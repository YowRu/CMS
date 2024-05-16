$(document).ready(function () {  
//table height
let contentH = $('#main .accordion').height();
let tabsWP_height = $('.tabsWP').height();
$('.table-responsive .tableWp').height(contentH - 210);
$('#tab0, #tab1, #tab4').height( contentH-tabsWP_height+19);
$('#tab0, #tab1, #tab4').addClass('scroll');
});