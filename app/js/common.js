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

  $('.catalog-href').on('click', function() {
    $(this).toggleClass('on');
    $('.block2').addClass('block2--move-to-left');
    $('.block2').removeClass('wow');
    $('.block2').removeClass('fadeInRight');

    $('.block2').addClass('slide-left');
    $('.nav-right').addClass('wow');
    $('.nav-right').addClass('fadeInRight');
    // $('.nav-right').setAttribute('data-wow-delay', '1s');
    $('.catalog-title--anim').removeClass('anim--hidden');
    $('.catalog-page--anim--hidden').addClass('catalog-page--anim');
    $('.catalog-page--anim--hidden').addClass('wow');
    $('.catalog-page--anim--hidden').addClass('slideInDown');
    $('.main-header__mobile .fa-instagram').addClass('fa-instagram--anim');
    $('.nav-right .catalog').addClass('anim--hidden');
    $('.logo').addClass('anim--hidden');
    $('.main-header__desctop').addClass('anim--hidden');
    $('.social-icon-anim').removeClass('anim--hidden');
    $('.main-menu__contacts').addClass('main-menu__contacts--anim');
    $('.main-wrapper').addClass('main-wrapper--anim');
    $('.nav-right').addClass('nav-right--anim');
    $('.nav-right a').addClass('nav-right--color');
    $('.nav-right .fa-instagram').addClass('nav-right--color');
    $('.main-menu__item').removeClass('anim--hidden');
    $('.catalog__tomain').removeClass('anim--hidden');
    $('.main-page').addClass('main-page--anim');
    $('.main-menu__phone').addClass('main-menu__phone--anim');
    $('.nav-right .overlay').toggleClass('overlay--anim');
    $('.nav-right-wrap').addClass('nav-right-wrap--anim');
  });

  $(".mt__item").on('click', function() {
    $('.block2').addClass("block2--move-to-left-mt");
    $('.block2').addClass("slide-left");
    $('.mt-page--anim--hidden ').addClass("mt-page--anim--visible");
    $('.mt__title--exampl').addClass("anim--hidden");
    $('.mt__subtitle').addClass("mt__subtitle--anim");
    $('.block2__container .social-icon').addClass("social-icon--anim");
    $('.logo img').addClass("mk-logo--anim");
    $('.mt__left-menu').addClass("pos-fix");
    $('.block2--move-to-left-mt').addClass("block2--move-to-left-mt--fix");
    $('.mt-descr').addClass("anim--hidden");
    $('.mt__item rotate').addClass("anim--hidden");
    $('.back-to').removeClass("anim--hidden");
    $('.block2--move-to-left-mt--fix .mt__item').addClass("anim--hidden");
    $('.back-to-mt').addClass("back-to-mt--anim");
    $('.hight-eco').addClass("anim--hidden");
    $('.main-wrapper__mt').addClass("main-wrapper__mt--anim");
  });
  
  $(".examples-panel-item--block").on('click', function() {
    $('.examples__img').addClass("examples__img-blocks");
  });
  $(".examples-panel-item--lines").on('click', function() {
    $('.examples__img').removeClass("examples__img-blocks");
  });
  
	// //скрыть весь контент
	// $('.tab_content').hide();
	// //Показать контент первой вкладки
	// $('.tab_content:first').show();
	// //Активировать первую вкладку
	// $('.tabs li:first').addClass('active');
	// //Событие по клику
	// $('.tabs li').click(function(event) {
	// 	//Удалить "active" класс
	// 	$('.tabs li').removeClass('active');
	// 	//Добавить "active" для выбранной вкладки
	// 	$(this).addClass('active');
	// 	//Скрыть контент вкладки
	// 	$('.tab_content').hide();

	// 	//Найти значение атрибута ссылки, чтобы 
	// 	//определить активный таб контент
	// 	var selectTab = $(this).find('a').attr("href");
	// 	//Исчезновение активного контента
	// 	$(selectTab).fadeIn();
  // });
  
  // /*tabs inside*/
  // (function($) {
  //   $(function() {
     
  //     $('.tabs__caption-exm').on('click', 'li:not(.active-exm)', function() {
  //       $(this)
  //         .addClass('active-exm').siblings().removeClass('active-exm')
  //         .closest('div.tabs-exm').find('div.tabs__content-exm').removeClass('active-exm').eq($(this).index()).addClass('active-exm');
  //     });
     
  //   });
  //   })(jQuery);
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
    

})