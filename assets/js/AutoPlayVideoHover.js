var video = document.querySelector(".containerGalery video");

video.addEventListener("mouseover", function() {
  video.play();
});

video.addEventListener("mouseout", function() {
  video.pause();
});
