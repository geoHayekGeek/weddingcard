var audio = document.getElementById('audio');
var musicIcon = document.getElementById('music-icon');
musicIcon.style.zIndex=2;

musicIcon.addEventListener('click', function() {
    console.log("clicked");
  if (audio.paused) {
    audio.play();
    musicIcon.classList.add('fa-scale');
  } else {
    audio.pause();
    musicIcon.classList.remove('fa-scale');
  }
});