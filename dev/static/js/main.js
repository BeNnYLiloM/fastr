$(document).ready(function () {

    svg4everybody({});

    $('.before-start__counter').countDown({
      label_dd: 'дней',
      label_hh: 'часов',
      label_mm: 'минут',
      label_ss: 'секунд'
    });

    $('.tokens__count').each(function () {
      $(this).find('.inner-block').css({
        'width': $(this).attr('data-count')
      }).find('span').text($(this).attr('data-count'))
    });

});
