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