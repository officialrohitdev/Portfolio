AOS.init();

const sidenav = document.getElementById("sidenav");
const closeNav = () =>
  sidenav.classList.remove("active");

const openNav = () =>
  sidenav.classList.add("active");

// sliders 

var swiper = new Swiper(".mySwiper", {
   loop: true,
   slidesPerView: 5,
   spaceBetween: 25,
   navigation: {
     nextEl: ".button-next",
     prevEl: ".button-prev",
   },
   // speed: 1000,
   // autoplay: {
   //   delay: 2500,
   //   disableOnInteraction: false,
   // },
   breakpoints: {
     320: {
       slidesPerView: 1,
     },
 
     768: {
       slidesPerView: 4,
     },
 
     1024: {
       slidesPerView: 5,
     },
   },
 });

 // scrollTop
$(document).ready(function () {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 150) {
         $('#scrollTotop').addClass('showscroll');
      } else {
         $('#scrollTotop').removeClass('showscroll');
      }
   });
 
   $('#scrollTotop').click(function () {
      $(window).scrollTop(0);
   });
 });


// Video Player 

document.addEventListener("DOMContentLoaded", function () {
   var video = document.getElementById("video");
   var playButton = document.getElementById("playButton");

   playButton.addEventListener("click", function () {
       if (video.paused) {
           video.play();
           playButton.innerHTML = '<i class="material-icons">pause</i>';
       } else {
           video.pause();
           playButton.innerHTML = '<i class="material-icons">play_arrow</i>';
       }
   });
});


// welcome popup

$(document).ready(function ($) {
  if (sessionStorage.getItem('advertOnce') !== 'true') {
     setTimeout(function () {
        $('#WelcomeModal').addClass('show').show();
     }, 1000);

  } else {
     $('#WelcomeModal').addClass('show').hide();
  };

  $('#btn-alpha').click(function () {
     sessionStorage.setItem('advertOnce', 'true');
     $('#WelcomeModal').removeClass('show').hide();
  });

  $('#btn-beta').click(function () {
     window.location.href = 'http://google.com/';
  });
});