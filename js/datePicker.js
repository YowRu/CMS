$('#chartDate, #connectionDate, #checkDate, #applyDate_apply, #checkDate_apply, #applyDate_mediaCheck, #edit_contract_start, #edit_contract_end, #mediadate_clone, #mediadate_replace, #pointDate, #mediadate, #mobile_end').daterangepicker({
  drops: 'down',
  opens: 'center',
  singleDatePicker: true,
  showDropdowns: true,
  timePicker: false,
  autoUpdateInput: false,
});

$('input.datepicker').on('apply.daterangepicker', function (ev, picker) {
  $(this).val(picker.startDate.format('YYYY.MM.DD'));
});

$('input.datepicker').on('cancel.daterangepicker', function (ev, picker) {
  $(this).val('');
});