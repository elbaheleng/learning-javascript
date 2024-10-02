let userPattern = [];
let compPattern = [];
let level = 0;
let buttonColours = ["red", "blue", "green", "yellow"];
$(document).ready(() => {
    $(document).
        keypress(function (event) {
            if (level === 0) nextLevel();
        })
});

function nextLevel() {
    userPattern = [];
    level++;
    $('h1').text("Level " + level);
    playComputer(level);
}

async function playComputer(buttonNumber) {
    let randomNumber = Math.floor(Math.random() * 4);
    compPattern.push(buttonColours[randomNumber]);
    for (let i = 0; i < buttonNumber; i++) {
        await new Promise(r => setTimeout(r, 1000));
        $("#" + compPattern[i]).addClass("pressed").delay(100).queue(function () {
            $(this).removeClass("pressed").dequeue();
        });
        var audio = new Audio('sounds/' + compPattern[i] + '.mp3');
        audio.play();

    }
}

function gameOver() {
    $('h1').text("Game Over. Press a Key to Restart");
    level = 0;
    userPattern = [];
    compPattern = [];
}
$(".btn").on("click", function () {
    if (level === 0) return;
    userPattern.push($(this).attr('id'));
    $(this).addClass("pressed").delay(100).queue(function () {
        $(this).removeClass("pressed").dequeue();
    });
    var audio = new Audio('sounds/' + $(this).attr('id') + '.mp3');
    audio.play();
    for (let i = 0; i < userPattern.length; i++) {
        if (userPattern[i] !== compPattern[i]) {
            gameOver();
            break;
        }
    }
    if (userPattern.length === compPattern.length && level !== 0)
        nextLevel();
});