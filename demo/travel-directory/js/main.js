// Nice select 

$('select').niceSelect();

$(document).on('click', '.nice-select', function () {
  const dropdown = $(this);
  const list = dropdown.find('.list');

  // Reset position
  dropdown.removeClass('open-up');

  // Calculate space
  const rect = this.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  const spaceBelow = windowHeight - rect.bottom;
  const listHeight = list.outerHeight();

  // If not enough space below → open upwards
  if (spaceBelow < listHeight) {
    dropdown.addClass('open-up');
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