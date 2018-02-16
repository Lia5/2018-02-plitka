$(function(){
    $(".menu-toggle").on('click', function() {
        $(this).toggleClass("on");
        $('.main-menu').toggleClass("on");
        $("nav ul").toggleClass('hidden');
      });
  
  
})