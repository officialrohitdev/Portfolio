AOS.init();

// swiper
var swiper = new Swiper(".bulkOrderSwiper", {
   // loop: true,
   slidesPerView: 5,
   spaceBetween: 20,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   breakpoints: {
      320: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 4,
      },

      1180: {
         slidesPerView: 5,
      }
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

// Video Player 
var ppbutton = document.getElementById("playBtn");
myVideo = document.getElementById("videoPlayer");
ppbutton.addEventListener("click", playPause);
function playPause() {
   if (myVideo.paused) {
      myVideo.play();
      ppbutton.innerHTML = '<i class="material-icons play">pause</i>';
      ppbutton.style.opacity = 0;
   }
   else {
      myVideo.pause();
      ppbutton.innerHTML = '<i class="material-icons play">play_arrow</i>';
      ppbutton.style.opacity = 1;
   }
}
