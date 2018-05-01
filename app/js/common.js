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
		return false;
	});


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


})