var numDice = 5;

function getRandomNumbers() {
    var randomNumbers = Array();
    for (var i = 0; i < numDice; i++) {
        randomNumbers.push(Math.floor(Math.random() * 6) + 1);
    }
    return randomNumbers;
}

function isRepeating(randomNumbers) {
    var occurances = [0, 0, 0, 0, 0, 0];
    for (var i = 0; i < randomNumbers.length; i++) {
        if (occurances[randomNumbers[i] - 1] == 1) {
            return true;
        } else {
            occurances[randomNumbers[i] - 1]++;
        }
    }
    return false;
}

function generate() {
    var randomNumbers = getRandomNumbers();
    while (!isRepeating(randomNumbers)) {
        randomNumbers = getRandomNumbers();
    }

    randomNumbers.sort();

    for (var i = 0; i < numDice; i++) {
        $('#num'+i).html(randomNumbers[i]);
    }
}

$(document).ready(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'audio.mp3');
    audioElement.setAttribute('autoplay', 'autoplay');
    audioElement.load()

    $.get();

    audioElement.addEventListener("load",
        function() {
            audioElement.play();
        }, true);

    generate();
    $('#reroll').click(function() {
        generate();
        audioElement.currentTime = 0;
        audioElement.play();
    });
});

