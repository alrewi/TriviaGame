var timeLeft = 30;

function reset () {
    $("#timer-display").text("30");
    $("#result-display").text("");
}
reset();

function start () {
    guessInterval = setInterval(guess, 30000);
}
start();

function guess () {
    timeLeft--;
    $("#timer-display").text(timeleft);
}
