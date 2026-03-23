// Video 

const video = document.getElementById("bg-video");
const playBtn = document.querySelector(".play-btn");
const playIcon = playBtn.querySelector("i");

video.pause();

playBtn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playIcon.textContent = "pause";
    playBtn.classList.add("playing");
  } else {
    video.pause();
    playIcon.textContent = "play_arrow";
    playBtn.classList.remove("playing");
  }
});

video.addEventListener("pause", () => {
  playIcon.textContent = "play_arrow";
  playBtn.classList.remove("playing");
});

// gallery

const lightbox = GLightbox({
  touchNavigation: true,
  loop: true,
});

// Wellcome Model

document.addEventListener('DOMContentLoaded', function () {
  const modalElement = document.getElementById('welcome-popup');
  const bootstrapModal = new bootstrap.Modal(modalElement, {
    backdrop: 'static',
    keyboard: false
  });

  if (sessionStorage.getItem('advertOnce') !== 'true') {
    setTimeout(() => {
      bootstrapModal.show();
    }, 1000);
  }

  document.getElementById('btn-alpha').addEventListener('click', function () {
    sessionStorage.setItem('advertOnce', 'true');
    bootstrapModal.hide();
  });

  document.getElementById('btn-beta').addEventListener('click', function () {
    window.location.href = 'https://www.google.com/';
  });
});
