var rate = 60000 / 120 / 2; //1 minute, bpm, amount of notes in quarter
var playing = false;

var srcGuitar = "audio/guitar.wav";
var srcGuitarDouble = "audio/guitar_double.wav";
var srcGuitarMuffled = "audio/guitar_muffled.wav";

function playSound() {
    if (!playing) {
        playing = true;
        generate();
    } else {
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
        if (random < 5) {
            localSoundSrc.src = srcGuitar;
        } else if (random < 7) {
            localSoundSrc.src = srcGuitarDouble;
        } else if (random < 9) {
            localSoundSrc.src = srcGuitarMuffled;
        }

        console.log(localSoundSrc.src);
        localSoundSnd.appendChild(localSoundSrc);
        localSoundSnd.play();

        setTimeout(generate, rate);
    }
}
