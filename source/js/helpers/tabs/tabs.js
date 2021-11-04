// tabs
$(document).ready(function(){

  $('.js-tabs-header').click(function() {
    var id = $(this).attr('data-tab'),
        content = $('.js-tabs-body[data-tab="'+ id +'"]');

    $('.js-tabs-header.active').removeClass('active');
    $(this).addClass('active');

    $('.js-tabs-body.active').removeClass('active');
    content.addClass('active');
  });

  // tabs-calc

  $('.js-tabs-calc-header').click(function() {
    var id = $(this).attr('data-tab'),
        content = $('.js-tabs-calc-body[data-tab="'+ id +'"]');

    $('.js-tabs-calc-header.active').removeClass('active');
    $(this).addClass('active');

    $('.js-tabs-calc-body.active').removeClass('active');
    content.addClass('active');
  });

});



