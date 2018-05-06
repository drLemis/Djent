var rate = 60000 / 120 / 4; //1 minute, bpm, amount of notes in quarter
var playing = false;

var srcGuitarClean = "audio/guitar_clean.wav";
var srcGuitarMute = "audio/guitar_mute.wav";
var srcGuitarFlageolet = "audio/guitar_flageolet.wav";

function playSound() {
    if (!playing) {
        document.getElementById("button").innerHTML = 'UNDJENT';
        playing = true;
        generate();
    } else {
        document.getElementById("button").innerHTML = 'DJENT';
        playing = false;
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generate() {
    if (playing) {
        var localSoundSnd = new Audio();
        var localSoundSrc = document.createElement("source");
        localSoundSrc.type = "audio/wav";

        var random = getRandomInt(0, 9);
        if (random < 4) {
            localSoundSrc.src = srcGuitarClean;
        } else if (random < 7) {
            localSoundSrc.src = srcGuitarMute;
        } else if (random < 9) {
            localSoundSrc.src = srcGuitarFlageolet;
        }

        // console.log(localSoundSrc.src);
        localSoundSnd.appendChild(localSoundSrc);
        localSoundSnd.play();

        setTimeout(generate, rate);
    }
}
