$(function(){
  $(".menu-toggle").on('click', function() {
    $(this).toggleClass("on");
    $('.main-menu').toggleClass("on");
    $(".main-header__mobile nav ul").toggleClass('hidden');
    $('.mt__left-menu').toggleClass("open");
  });

  $(".catalog-href").on('click', function() {
    $(this).toggleClass("on");
    $('.block2').addClass("block2--move-to-left");
    $('.block2').addClass("slide-left");
    $('.catalog--anim--hidden').addClass(" catalog--anim--visible");
    $('.catalog-page--anim--hidden').addClass("catalog-page--anim");
    $('.catalog-page--anim--hidden').addClass("slide-down");
    $('.block2 div').addClass("anim--hidden");
    $('.left-side__desctop').addClass("anim--hidden");
    $('.main-header__mobile .catalog').addClass("anim--hidden");
    $('.main-header__mobile .fa-instagram').addClass("fa-instagram--anim");
    $('.logo').addClass("anim--hidden");
    $('.social-icon-anim').removeClass("anim--hidden");
    $('.main-menu__contacts--anim').removeClass("anim--hidden");
    
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
  });

	//скрыть весь контент
	$('.tab_content').hide();
	//Показать контент первой вкладки
	$('.tab_content:first').show();
	//Активировать первую вкладку
	$('.tabs li:first').addClass('active');
	//Событие по клику
	$('.tabs li').click(function(event) {
		//Удалить "active" класс
		$('.tabs li').removeClass('active');
		//Добавить "active" для выбранной вкладки
		$(this).addClass('active');
		//Скрыть контент вкладки
		$('.tab_content').hide();

		//Найти значение атрибута ссылки, чтобы 
		//определить активный таб контент
		var selectTab = $(this).find('a').attr("href");
		//Исчезновение активного контента
		$(selectTab).fadeIn();
  });
  
  /*tabs inside*/
  (function($) {
    $(function() {
     
      $('.tabs__caption-exm').on('click', 'li:not(.active-exm)', function() {
        $(this)
          .addClass('active-exm').siblings().removeClass('active-exm')
          .closest('div.tabs-exm').find('div.tabs__content-exm').removeClass('active-exm').eq($(this).index()).addClass('active-exm');
      });
     
    });
    })(jQuery);
})