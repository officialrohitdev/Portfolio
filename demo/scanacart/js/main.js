AOS.init();

// swiper
var swiper = new Swiper(".OurPartners", {
   slidesPerView: 1,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
});

var swiper = new Swiper(".priceSwiper", {
   loop: true,
   slidesPerView: 3,
   spaceBetween: 10,
   centeredSlides: true,
   effect: "coverflow",
   grabCursor: true,
   coverflowEffect: {
     rotate: 40,
     stretch: 0,
     depth: 100,
     modifier: 0,
     slideShadows: false,
   },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   }, slidesPerView: 1,
   breakpoints: {
     768: {
       slidesPerView: 2
     },
     
     1024: {
       slidesPerView: 3
     },
   },
 });

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