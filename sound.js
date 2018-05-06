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

function playSound() {
    if (!playing) {
        document.getElementById("button").innerHTML = 'UNDJENT';
        playing = true;
        evolution = 8;
        generateGuitar();
    } else {
        document.getElementById("button").innerHTML = 'DJENT';
        playing = false;
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateGuitar() {
    if (playing) {
        var tab = "-";

        var random = getRandomInt(1, 100);
        if (random <= 40) {
            audioGuitarClean.cloneNode(true).play();
            tab = "0";
        } else if (random <= 65) {
            audioGuitarMute.cloneNode(true).play();
            tab = "X";
        } else if (random <= 80) {
            audioGuitarFlageolet.cloneNode(true).play();
            tab = "F";
        }

        var tabEl = document.getElementById("tabs");
        tabEl.innerHTML = tabEl.innerHTML.substr(1) + tab;

        evolution++;
        if (evolution > 7){
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
            audioDrumsMain.cloneNode(true).play();
        } else if (random <= 85) {
            audioDrumsFiller.cloneNode(true).play();
        } else if (random <= 100) {
            audioDrumsBridge.cloneNode(true).play();
        }
    }

}
