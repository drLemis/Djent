var rate = 60000 / 120 / 4; //1 minute, bpm, amount of notes in quarter
var playing = false;
var evolution = 8;

// guitar
var audioGuitarClean = new Audio("audio/guitar_clean.wav");
audioGuitarClean.load();
audioGuitarClean.preload = 'auto';

var audioGuitarMute = new Audio("audio/guitar_mute.wav");
audioGuitarMute.load();
audioGuitarMute.preload = 'auto';

var audioGuitarFlageolet = new Audio("audio/guitar_flageolet.wav");
audioGuitarFlageolet.load();
audioGuitarFlageolet.preload = 'auto';

// drums
var audioDrumsMain = new Audio("audio/drums_main.wav");
audioDrumsMain.load();
audioDrumsMain.preload = 'auto';

var audioDrumsFiller = new Audio("audio/drums_filler.wav");
audioDrumsFiller.load();
audioDrumsFiller.preload = 'auto';

var audioDrumsBridge = new Audio("audio/drums_bridge.wav");
audioDrumsBridge.load();
audioDrumsBridge.preload = 'auto';

var currentDrums;
var currentGuitar;

function playSound() {
    if (!playing) {
        document.getElementById("button").innerHTML = 'UNDJENT';
        playing = true;
        evolution = 8;
        generateGuitar();
    } else {
        document.getElementById("button").innerHTML = 'DJENT';
        playing = false;
        stopSound();
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function stopSound() {
    currentDrums.pause();
    currentDrums.currentTime = 0;

    currentGuitar.pause();
    currentGuitar.currentTime = 0;
}

function generateGuitar() {
    if (playing) {
        var tab = "-";

        var random = getRandomInt(1, 100);
        if (random <= 40) {
            currentGuitar = audioGuitarClean.cloneNode(true);
            tab = "0";
        } else if (random <= 65) {
            currentGuitar = audioGuitarMute.cloneNode(true);
            tab = "X";
        } else if (random <= 80) {
            currentGuitar = audioGuitarFlageolet.cloneNode(true);
            tab = "F";
        }

        currentGuitar.play();

        var tabEl = document.getElementById("tabs");
        tabEl.innerHTML = tabEl.innerHTML.substr(1) + tab;

        evolution++;
        if (evolution > 7) {
            evolution = 0;
            generateDrums();
        }

        setTimeout(generateGuitar, rate);
    }
}

function generateDrums() {
    if (playing) {
        var random = getRandomInt(1, 100);
        if (random <= 50) {
            currentDrums = audioDrumsMain.cloneNode(true);
        } else if (random <= 85) {
            currentDrums = audioDrumsFiller.cloneNode(true);
        } else if (random <= 100) {
            currentDrums = audioDrumsBridge.cloneNode(true);
        }

        currentDrums.play();
    }

}
