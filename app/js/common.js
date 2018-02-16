$(function(){
    $(".menu-toggle").on('click', function() {
        $(this).toggleClass("on");
        $('.main-menu').toggleClass("on");
        $(".main-header__mobile nav ul").toggleClass('hidden');
      });
  
  
})