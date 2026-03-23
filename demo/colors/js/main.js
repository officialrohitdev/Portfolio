AOS.init();

// scrollTop
$(document).ready(function () {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
         $('#scrollTotop').addClass('showscroll');
      } else {
         $('#scrollTotop').removeClass('showscroll');
      }
   });

   $('#scrollTotop').click(function () {
      $(window).scrollTop(0);
   });
});

$(function() {  
   $("body").niceScroll({
      scrollspeed: 0,
      smoothscroll: true,
   });
});


$(window).load(function() {
   $("#status").fadeOut();
   $("#preloader").delay(350).fadeOut("slow");
})  