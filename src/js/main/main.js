
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

// 20220304
  // mobile gnb
  $('.allMenuOpen').on('click', function (e) {
    e.preventDefault();
    $('#allMenuBox').show(0).attr('tabindex', 0);
    $('#allMenuBox').addClass('active');
    $('#overlay').addClass('active');
  });
  $('.allMenuClose').on('click', function (e) {
    e.preventDefault();
    $('#allMenuBox').removeClass('active').attr('tabindex', -1);
    $('#allMenuBox').delay(600).hide(0);
    $('#overlay').removeClass('active');
  });

  $('#allMenuBox').removeClass('active').attr('tabindex', -1);
  $('#allMenuBox > ul > li').each(function () {
    $(this).children('a').on('click', function (e) {
      if ($(this).siblings().length > 0) {
        e.preventDefault();
        $(this).parent().addClass('active').siblings().removeClass('active');
      }
    });
  });

  // Responsive
window.addEventListener('resize', function(event) {
  function responsiveSize() {
    windowWidth = $(window).width();
    if (windowWidth >= 1100) {
      $('#overlay').removeClass('active');
    }
  }responsiveSize();
}, true);

})
