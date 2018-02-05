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

    $('.team__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        centerMode: true,
        arrows: false,
        variableWidth: true,
        dots: true,
    });

    $('.toggle-menu').click(function () {
        $('.menu').addClass('_open');
    });

    $('.menu__close-btn').click(function () {
        $('.menu').removeClass('_open');
    });

    $(document).mouseup(function (e) {
        var container = $(".menu");
        if (container.has(e.target).length === 0){
            container.removeClass('_open');
        }
    });

  /* Scroll event handler */
  $(window).bind('scroll',function(e){
      parallaxScroll();
  });

});

/* Scroll the background layers */
function parallaxScroll(){
  var scrolled = $(window).scrollTop();
  $('.stars__one').css('top',(0-(scrolled*.15))+'px');
  // $('.stars__two').css('top',(0-(scrolled*.5))+'px');
  // $('.stars__three').css('top',(0-(scrolled*.45))+'px');
}