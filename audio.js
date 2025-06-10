// Ensure audio plays even if browser blocks autoplay without interaction
    document.addEventListener('DOMContentLoaded', function() {
      var audio = document.getElementById('bg-audio');
      audio.volume = 0.5;
      audio.play().catch(function() {
        // Try to play after user interaction if blocked
        document.body.addEventListener('click', function playAudioOnce() {
          audio.play();
          document.body.removeEventListener('click', playAudioOnce);
        });
      });
    });