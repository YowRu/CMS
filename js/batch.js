//checkbox ALL btn 
$('.table-responsive .head_bg td input[type="checkbox"]').click(function () {
  let num = $(this).parents('.table-responsive').find('.mainTable td input[type="checkbox"]:checked').length;
  if (num == $('.mainTable td input[type="checkbox"]').length) {
    $('.mainTable td input[type="checkbox"]').prop('checked', false);
    $('.batch').removeClass('able');
  } else {
    $('.mainTable td input[type="checkbox"]').prop('checked', true);
    $('.batch').addClass('able');
  }
});

//auto click checkbox
$('.mainTable td input[type="checkbox"]').click(function () {
  let num = $(this).parents('.table-responsive').find('.mainTable td input[type="checkbox"]:checked').length;
 
  if (num == $(this).parents('.table-responsive').find('.mainTable td input[type="checkbox"]').length) {
    $(this).parents('.table-responsive').find('input[type="checkbox"]').prop('checked', true);
  }
});

//batch
$('.mainTable input[type="checkbox"]').change(function () {
  if ($('.mainTable input[type="checkbox"]:checked').length > 1) {
    $('.batch').addClass('able');
    if($('.mainTable input[type="checkbox"]:checked').length  !== $('.mainTable input[type="checkbox"]').length){
      $('.head_bg td input[type="checkbox"]').prop('checked', false);
    }
  } else {
    $('.batch').removeClass('able');
  }
});

$('.batch').click(function () {
  if ($(this).hasClass('able') && $(this).hasClass('playCheck')) {
    Swal.fire({
      target: document.getElementById('main'),
      title: '<p class="title">批量同意</p>',
      html: '<div>確認同意所有刊播嗎 ?</div>',
      showCancelButton: true,
      showConfirmButton: false,
      showCloseButton: true,
      showDenyButton: true,
      cancelButtonText: '取消',
      denyButtonText: `確認`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('已同意', '', 'success')
      }
      function reflash() {
        window.location.replace(location.href);
      }
      setTimeout(reflash, 2000);
    });
  }else{
    Swal.fire({
      target: document.getElementById('main'),
      title: '<p class="title">批量同意</p>',
      html: '<div>確認同意所有素材嗎 ?</div>',
      showCancelButton: true,
      showConfirmButton: false,
      showCloseButton: true,
      showDenyButton: true,
      cancelButtonText: '取消',
      denyButtonText: `確認`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('已同意', '', 'success')
      }
      function reflash() {
        window.location.replace(location.href);
      }
      setTimeout(reflash, 2000);
    });
  }
});