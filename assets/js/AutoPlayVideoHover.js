var videos = document.querySelectorAll(".containerGalery video");

    videos.forEach(function(video) {
        
        video.addEventListener("mouseover", function() {
            video.play();
        });

        video.addEventListener("mouseout", function() {
            video.pause();
        });
});
