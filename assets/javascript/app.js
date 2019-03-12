

var timeLeft = 120;
var timerRunning = false;
var correctAnswer;
var numberCorrect = 0;
var numberWrong = 0;
var noAnswer = 0;

function reset () {
    // $("#question").text(spaceQuestions.one.question);
    // $("#question").css("background-image", 'url("assets/images/hubble-1632627-640x360.jpg")');
    // $("#button-1").text(spaceQuestions.one.answers.one);
    // $("#button-2").text(spaceQuestions.one.answers.two);
    // $("#button-3").text(spaceQuestions.one.answers.three);
    // $("#button-4").text(spaceQuestions.one.answers.four);
    $("#timer-display").text("Only 2:00 left!");

    runTimer();
}
reset();

function runTimer () {
    if (!timerRunning) {
    guessInterval = setInterval(decrement, 1000);
    timerRunning = true;
    }
}

function decrement () {
    timeLeft--;
    var convertedTime = timeConverter(timeLeft);
    $("#timer-display").text("Only " + convertedTime + " left!");
    if (timeLeft < 0) {
        stopTimer();
        $("#timer-display").text("Time's up! Check out your results.")
    }
}

function timeConverter(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    if (minutes === 0) {
      minutes = "0";
    }
    else if (minutes < 10) {
      minutes = minutes;
    }
    return minutes + ":" + seconds;
  }

function stopTimer () {
    timerRunning = false;
    clearInterval(guessInterval);
}
