$(function(){
  $(".menu-toggle").on('click', function() {
    $(this).toggleClass("on");
    $('.main-menu').toggleClass("on");
    $(".main-header__mobile nav ul").toggleClass('hidden');
  });

  $("#catalog-href").on('click', function() {
    $(this).toggleClass("on");
    $('.block2').addClass("block2--move-to-left");
    $('.block2').addClass("slide-left");
    $('.catalog--anim--hidden').addClass(" catalog--anim--visible");
    $('.catalog-page--anim--hidden').addClass("catalog-page--anim");
    $('.catalog-page--anim--hidden').addClass("slide-down");
    $('.block2 div').addClass("anim--hidden");
    $('.left-side__desctop').addClass("anim--hidden");
  });

  
})