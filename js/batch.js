//checkbox ALL btn 
$('.table-responsive .head_bg td input[type="checkbox"]').click(function () {
  let searchCondition = $('.keywordSearch input.keyWords').val();//filter keyWords checkbox ALL btn 
  let selectedCount = 0;//已選取的資料行數量
  if (searchCondition !== '') {

    $('.fbody tr').each(function () {
      let row = $(this);
      let isMatch = false;

      row.find('td').each(function () {
        let tdText = $(this).text();
        // 檢查該td是否符合搜尋條件
        if (tdText.includes(searchCondition)) {
          isMatch = true;
          // 如果符合條件，則選取該資料行
          row.find('input[type="checkbox"]').prop('checked', true);
          // 因為已經找到匹配的td，所以不需要再繼續檢查其他td
          return false; // 這會停止.each()的迭代
        }
      });

      // 如果該資料行的任何td都符合條件，則選取該資料行
      if (isMatch) {
        row.find('input[type="checkbox"]').prop('checked', true);
        selectedCount++;
      }
    });

    //超過一列批量亮燈
    if (selectedCount > 1) {
      $('.batch').addClass('able');
    }
  } else {
    let num = $(this).parents('.table-responsive').find('.mainTable td input[type="checkbox"]:checked').length;
   
    if (num == $('.mainTable td input[type="checkbox"]').length) {
      $('.mainTable td input[type="checkbox"]').prop('checked', false);
      $('.batch').removeClass('able');
    } else {
      $('.mainTable td input[type="checkbox"]').prop('checked', true);
      $('.batch').addClass('able');
    }
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
    if ($('.mainTable input[type="checkbox"]:checked').length !== $('.mainTable input[type="checkbox"]').length) {
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
  } else {
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