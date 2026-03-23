AOS.init();

// Video Player 
var ppbutton = document.getElementById("playBtn");
myVideo = document.getElementById("videoPlayer");
ppbutton.addEventListener("click", playPause);
function playPause() {
   if (myVideo.paused) {
      myVideo.play();
      let pause_html = 'pause';
      ppbutton.children[1].innerHTML = pause_html;
   }
   else {
      myVideo.pause();
      let play_html = 'play_arrow';
      ppbutton.children[1].innerHTML = play_html;
   }
}