AOS.init();

const sideNav = document.getElementById("sideaNav");

sideNav.addEventListener("shown.bs.collapse", function () {
  document.body.style.overflow = "hidden";
});

sideNav.addEventListener("hidden.bs.collapse", function () {
  document.body.style.overflow = "";
});

// scrollTop

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $("#scrollTotop").addClass("showscroll");
    } else {
      $("#scrollTotop").removeClass("showscroll");
    }
  });

  $("#scrollTotop").click(function () {
    $(window).scrollTop(0);
  });
});

// video modal reset

$(document).ready(function () {
  var $videoModal = $("#videoPop");
  var $videoIframe = $("#video");
  var originalVideoSrc = $videoIframe.data("video-src") || $videoIframe.attr("src");

  $videoModal.on("show.bs.modal", function () {
    if ($videoIframe.attr("src") !== originalVideoSrc) {
      $videoIframe.attr("src", originalVideoSrc);
    }
  });

  $videoModal.on("hidden.bs.modal", function () {
    $videoIframe.attr("src", "");
  });
});

// counter

const el = document.getElementById("count");
const box = document.querySelector(".counter-box");

const animate = (from, to, d = 2000) => {
  let start;
  const ease = t => 1 - (1 - t) ** 3;

  const run = t => {
    if (!start) start = t;
    const p = Math.min(1, (t - start) / d);
    el.textContent = `${(from + (to - from) * ease(p)).toFixed(0)}k+`;
    if (p < 1) requestAnimationFrame(run);
  };

  requestAnimationFrame(run);
};

// 🔁 Repeat on every scroll into view
new IntersectionObserver(([e]) => {
  if (e.isIntersecting) {
    box.classList.add("ready");
    el.textContent = "0k+"; // reset before start
    animate(0, 45);
  }
}, { threshold: 0.5 }).observe(box);


// slider

const colors = ["#ff6b6b", "#4ecdc4", "#ffe66d", "#5f27cd"];

function applyColors() {
  document.querySelectorAll(".swiper-slide").forEach((slide) => {
    const card = slide.querySelector(".flavor-card");
    const index = slide.getAttribute("data-index");

    if (card && index !== null) {
      card.style.background = colors[index % colors.length];
    }
  });
}


var swiper = new Swiper(".FlavorsSlider", {
  spaceBetween: 30,
  slidesPerView: 4,
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
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
  },

  on: {
    init() { applyColors(); },
    slideChange() { applyColors(); }
  }
});