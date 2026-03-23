// Hide Header on on scroll down

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function (event) {
  didScroll = true;
});

setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 150);

function hasScrolled() {
  var st = $(this).scrollTop();

  if (Math.abs(lastScrollTop - st) <= delta)
    return;

  if (st > lastScrollTop && st > navbarHeight) {

    $('header').removeClass('show-nav').addClass('hide-nav');

  } else {

    if (st + $(window).height() < $(document).height()) {
      $('header').removeClass('hide-nav').addClass('show-nav');
    }
  }

  lastScrollTop = st;
}

$(window).scroll(function () {
  if ($(window).scrollTop() >= 50) {
    $('header').addClass('sticky-header');
  }
  else {
    $('header').removeClass('sticky-header');
  }
});


document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
          var navbarToggler = document.querySelector(".navbar-toggler");
          if (navbarToggler.offsetParent !== null) {
              navbarToggler.click();
          }
      });
  });
});
