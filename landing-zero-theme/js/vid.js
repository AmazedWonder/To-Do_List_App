
    document.getElementById('toggleVideo').addEventListener('click', function(e) {
        e.preventDefault();
        // Prevent the default anchor behavior

        // Scroll to the video section smoothly
        document.querySelector('#video-section').scrollIntoView({
            behavior: 'smooth'
        });

        // Play the video
        var video = document.getElementById('video-background');
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });