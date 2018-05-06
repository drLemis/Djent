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

        var tab = "-";

        var random = getRandomInt(1, 100);
        if (random <= 40) {
            localSoundSrc.src = srcGuitarClean;
            tab = "0";
        } else if (random <= 65) {
            localSoundSrc.src = srcGuitarMute;
            tab = "X";
        } else if (random <= 80) {
            localSoundSrc.src = srcGuitarFlageolet;
            tab = "F";
        }

        var tabEl = document.getElementById("tabs");
        tabEl.innerHTML = tabEl.innerHTML.substr(1)+tab;

        // console.log(localSoundSrc.src);
        localSoundSnd.appendChild(localSoundSrc);
        localSoundSnd.play();

        setTimeout(generate, rate);
    }
}
