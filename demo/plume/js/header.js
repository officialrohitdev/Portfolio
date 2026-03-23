// Hide Header on on scroll down
const myHeader = document.getElementById("myHeader");
const headroom = new Headroom(myHeader);
headroom.init();

$(window).scroll(function () {
  if ($(window).scrollTop() >= 100) {
    $('header').addClass('sticky-header');
  }
  else {
    $('header').removeClass('sticky-header');
  }
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

