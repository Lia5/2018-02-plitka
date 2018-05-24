$(function(){
  
  new WOW().init();


  $('.menu-toggle').on('click', function() {
    $('.nav-right .overlay').toggleClass('overlay--menu');
    $(this).toggleClass('on');
    $('.main-menu').toggleClass('on');
    $('.main-header__mobile nav ul').toggleClass('hidden');
    $('.mt__nav-left-wrap').toggleClass('mt__nav-left-open');
    $('.mt__social-icon').toggleClass('mt__social-icon-open');
  //  $('.catalog-page--anim--hidden').toggleClass("hidden");
  
  });

  $(".examples-panel-item--block").on('click', function() {
    $('.examples__img').addClass("examples__img-blocks");
  });
  $(".examples-panel-item--lines").on('click', function() {
    $('.examples__img').removeClass("examples__img-blocks");
  });
  
//popups
    $(function() {
      //----- OPEN
      $('[data-popup-open]').on('click', function(e)  {
          var targeted_popup_class = jQuery(this).attr('data-popup-open');
          $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
   
          e.preventDefault();
      });
   
      //----- CLOSE
      $('[data-popup-close]').on('click', function(e)  {
          var targeted_popup_class = jQuery(this).attr('data-popup-close');
          $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
   
          e.preventDefault();
      });
      //------ jQuery: Закрытие элемента по клику за пределами его области (вне элемента)
      $(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $(".popup-inner"); // тут указываем ID элемента
         if (!div.is(e.target) // если клик был не по нашему блоку
         && div.has(e.target).length === 0) { // и не по его дочерним элементам
       div.parent().hide(); // скрываем его родителя (оверфлоу фон)
     }
  });
  });

  (function($){
    $(document).ready(function(){
    
    $('#cssmenu li.active').addClass('open').children('ul').show();
      $('#cssmenu li.has-sub>a').on('click', function(){
        $(this).removeAttr('href');
        var element = $(this).parent('li');
        if (element.hasClass('open')) {
          element.removeClass('open');
          element.find('li').removeClass('open');
          element.find('ul').slideUp(200);
        }
        else {
          element.addClass('open');
          element.children('ul').slideDown(200);
          element.siblings('li').children('ul').slideUp(200);
          element.siblings('li').removeClass('open');
          element.siblings('li').find('li').removeClass('open');
          element.siblings('li').find('ul').slideUp(200);
        }
      });
    
    });
    })(jQuery);
    if(jQuery('.cat__item--left--up').length) {
      var up = document.querySelector('.cat__item--left--up');
      var down = document.querySelector('.cat__item--left--down');
      var list = document.querySelectorAll('.cat__menu__item');
      var i = 5;
      up.onclick = function () {
        list[i].classList.remove('cat__item__active');
        i--;
        if (i < 0) {
          i = list.length-1;
        }
        list[i].classList.add('cat__item__active');
      }
      down.onclick = function () {
        list[i].classList.remove('cat__item__active');
        i++;
        if (i >= list.length) {
          i = 0;
        }
        list[i].classList.add('cat__item__active');
      }
    }
   

    $(document).ready(function(){
      $('.gallery-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        adaptiveHeight: true,    
        dots: true,
      });
    });
   // MAP
   if(jQuery('#map').length) {
   ymaps.ready(init);
   function init(){     
      var myMap = new ymaps.Map("map", {
           center: [55.984795, 37.903761],
           zoom: 13
       }),
       
       // Создаем метку с помощью вспомогательного класса.
       myPlacemark1 = new ymaps.Placemark([55.984453, 37.872863], {
        // Свойства.
        // Содержимое иконки, балуна и хинта.
        balloonContentBody: 'Мир брусчатки',
       balloonContentFooter: 'МО, г. Пушкино, Новая улица, 16',
       hintContent: 'Мир брусчатки'
    }, {
        // Опции.
        // Своё изображение иконки метки.
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'img/icons/marker.png',
        // Размеры метки.
        iconImageSize: [74, 71]
    });
  
  // Добавляем все метки на карту.
  myMap.geoObjects.add(myPlacemark1);
  myMap.behaviors.disable('scrollZoom');
  
   };
  }
  //gorizont
  jQuery(window).width() >= 750 && $('.horizon').mousewheel(function(event, delta) {
		event.preventDefault();
    this.scrollLeft -= (delta * 30);
    $('.footer-block').css({'right':'-10vw'});
		return false;
  });
  jQuery(window).width() >= 750 && $('.footer-block').mouseover(function() {
      $('.footer-block').css({'right':'0'});
  });  
  // поплавок
  // jQuery(window).width() >= 750 && $('.horizon').mousewheel(function() {
  //   clearTimeout($.data(this, 'timer'));
  //   $.data(this, 'timer', setTimeout(function() {
  //     $('.footer-block').css({'right':'0'});
  //      //do something
  //   }, 500));
  // });

  jQuery(window).width() >= 750 &&  $('.horizon').scrollbar();
/*filter*/
  $('.filter-item1').on('click', function() {
    $('.filter-item2').removeClass('on');
    $(this).toggleClass('on');
  });
  $('.filter-item2').on('click', function() {
    $('.filter-item1').removeClass('on');
    $(this).toggleClass('on');
  });
  //------ jQuery: Закрытие элемента по клику за пределами его области (вне элемента)
    $(document).mouseup(function (e){ // событие клика по веб-документу
      var div = $(".filter-item-wrap"); // тут указываем ID элемента
      if (!div.is(e.target) // если клик был не по нашему блоку
      && div.has(e.target).length === 0) { // и не по его дочерним элементам
        $(".filter-item").removeClass('on'); // скрываем его родителя (оверфлоу фон)
      }
    });

    /*design-slider*/

        $('.tabs-foto').on('click', '.design-prev__img', function() {
          var e = $(".design-prev__img"),
          o = $(".tabs__content-foto");
          return e.removeClass("active"), o.removeClass("active"), $(this).addClass("active").fadeIn(), o.eq($(this).index()).addClass("active"), !1
        });
       

    $('.design-prev').slick({
      slidesToShow: 8,
      slidesToScroll: 4,
      dots: true,
      arrows: false,
      infinite: false,
      // vertical: true

    });


}) ;
    jQuery(window).width() >= 750 && $(window).scroll(function() {
        // if($(this).scrollLeft() != 0) {
        //   $('.to-up').fadeIn();
        // } else {
        //   $('.to-up').fadeOut();
        // }
      });
      $('.to-up').click(function() {
        $('.horizon ').animate({scrollLeft:0},800);
      });
      // $('#menu a').click(function() {
      //   $('#3 ').animate({scrollLeft:0},800);
      // });
 jQuery(window).width() < 750 && $(window).scroll(function() {
        // if($(this).scrollTop() != 0) {
        //   $('.to-up').fadeIn();
        // } else {
        //   $('.to-up').fadeOut();
        // }
      });
      $('.to-up').click(function() {
      $('html, body ').animate({scrollTop:0},800);
    });

    $(function(){
      var sections = {},
          _width  = $(window).width(),
          i        = 0;
  
      // Grab positions of our sections 
      $('.section').each(function(){
          sections[this.name] = $(this).offset().left;
      });
  
      $(document).scroll(function(){
          var $this = $(this),
              pos   = $this.scrollLeft();
  
          for(i in sections){
              if(sections[i] >= pos && sections[i] <= pos + _width){
                  $('a').removeClass('active');
                  $('#nav_' + i).addClass('active');
              }  
          }
      });
  });

      /*MODAL*/
$(document).ready(function() {
  $('body').append('<div class="blackout-bg"></div>');
  $('body').append('<div id="blackout"></div>');
  // var boxWidth = 800;
  function centerBox() {
    
    /* определяем нужные данные */
    var winWidth = $(window).width();
    var winHeight = $(document).height();
    var scrollPos = $(window).scrollTop();
    
    /* Вычисляем позицию */
 winHeight = winHeight +1000;
    // var disWidth = (winWidth - boxWidth) / 2
    var disHeight = scrollPos + 150;
    
    /* Добавляем стили к блокам */
    // $('.popup-box').css({'width' : boxWidth+'px', 'left' : disWidth+'px', 'top' : disHeight+'px'});
    $('#blackout').css({'width' : winWidth+'px', 'height' : winHeight+'px'});
    $('.blackout-bg').css({'width' : winWidth+'px', 'height' : winHeight+'px'});
    return false;       
  }
  $(window).resize(centerBox);
  $(window).scroll(centerBox);
  centerBox(); 
  $('[class*=popup-link]').click(function(e) {
    
    /* Предотвращаем действия по умолчанию */
    e.preventDefault();
    e.stopPropagation();
    
    /* Получаем id (последний номер в имени класса ссылки) */
    var name = $(this).attr('class');
    var id = name[name.length - 1];
    var scrollPos = $(window).scrollTop();
    
    /* Корректный вывод popup окна, накрытие тенью, предотвращение скроллинга */
    $('#popup-box-'+id).show();
    $('.blackout-bg').show();
    $('#blackout').show();
    $('html,body').css('overflow', 'hidden');
    $('body').css('padding-right', '17px');
    /* Убираем баг в Firefox */
    $('html').scrollTop(scrollPos);
  });

  $('[class*=popup-box]').click(function(e) { 
      /* Предотвращаем работу ссылки, если она являеться нашим popup окном */
      e.stopPropagation(); 
  });
  $('html').click(function() { 
      var scrollPos = $(window).scrollTop();
      /* Скрыть окно, когда кликаем вне его области */
      $('[id^=popup-box-]').hide(); 
      $('.blackout-bg').hide(); 
      $('#blackout').hide(); 
      $("html,body").css("overflow","auto");
      $('body').css('padding-right', '0');
      $('html').scrollTop(scrollPos);
  });
  $('.close').click(function() { 
      var scrollPos = $(window).scrollTop();
      /* Скрываем тень и окно, когда пользователь кликнул по X */
      $('[id^=popup-box-]').hide(); 
      $('.blackout-bg').hide();
      $('#blackout').hide(); 
      $("html,body").css("overflow","auto");
      $('body').css('padding-right', '0');
      $('html').scrollTop(scrollPos);
  });
});



/*1-2-3-4 navigation*/

