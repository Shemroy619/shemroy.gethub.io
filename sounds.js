//the following is the sound of the documet //
// javascript
// function playSound(audioFile, loop) {
//     let audio = new Audio(audioFile);
//     audio.loop = loop;
//     audio.play();
// }

// playSound("play.mp3", true);


function playSound(audioFile, loop) {
    let audio = new Audio(audioFile);
    
    audio.addEventListener('canplaythrough', function() {
        // Ensure the audio has loaded before attempting to play
        audio.loop = loop;
        audio.play();
    });

    audio.addEventListener('error', function(err) {
        // Log any errors to the console
        console.error('Error loading audio:', err);
    });
}

playSound("loud", true);