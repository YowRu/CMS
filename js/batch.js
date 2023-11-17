//checkbox ALL
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
  if ($(this).hasClass('able')) {
    Swal.fire({
      target: document.getElementById('main'),
      title: '<p class="title">批量刪除</p>',
      html: '<div>確認刪除所有素材嗎 ?</div>',
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: '確認',
      cancelButtonText: '取消',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('已刪除', '', 'success')
      }
      function reflash() {
        window.location.replace(location.href);
      }
      setTimeout(reflash, 2000);
    });
  }
});