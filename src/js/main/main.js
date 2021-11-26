
$(function () {
  // tab
  var tabConts = $('.tabConts'),
    tabList = $('.tabList'),
    tab_btn = $('.tabList li');

  tabConts.find('.tabCont').hide();
  tabConts.find('.tabCont:first').show();
  tabList.find('li:first').find('a').addClass('on');
  tab_btn.on('click', 'a', function (e) {
    e.preventDefault();
    var getId = $(this).prop('href').split('#')[1];
    $(this).parents('.tab').next('.tabConts').find('.tabCont').hide();
    $(this).parents('.tabList').find('a').removeClass('on');
    $(this).addClass('on');
    $('#' + getId).show();
  });

  var fileTarget = $('.fileBox .uploadHidden');
  fileTarget.on('change', function () {
    if (window.FileReader) {
      var filename = $(this)[0].files[0].name;
    } else {
      var filename = $(this).val().split('/').pop().split('\\').pop();
    }
    $(this).siblings('.uploadName').val(filename);
  });

  $('.btnClose').on('click', function () {
    $(this).parents('.popOverlay').hide();
  })
  $('.btnRegistrationDamage').on('click', function () {
    $('.RegistrationDamage').parents('.popOverlay').show();
  })
  $('.btnRegistrationList').on('click', function () {
    $('.RegistrationList').parents('.popOverlay').show();
  })

})
