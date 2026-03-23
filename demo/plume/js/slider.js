var swiper = new Swiper(".mySwiperTop", {
  slidesPerView: 1,
  speed: 2000,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const flavorsSwiper = new Swiper('.flavorsSwiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  speed: 1500,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    // when window width is >= 576px
    576: {
      slidesPerView: 2,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
    },

    // when window width is >= 992px
    992: {
      slidesPerView: 3,
    },

    // when window width is >= 1180px
    1180: {
      slidesPerView: 4,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 5,
    }
  }
});

// Initialize Products Swiper
const productsSwiper = new Swiper('.productsSwiper', {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 150,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 50,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 70,
    },

    1200: {
      slidesPerView: 3,

    }
  }
});