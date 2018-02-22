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
  });
  
})