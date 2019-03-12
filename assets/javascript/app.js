
//Initial variables
var timeLeft = 30;
var timerRunning = false;
var numberCorrect = 0;
var numberWrong = 0;

//A function to reset the timer and the game area on load
function reset () {
    $("#timer-display").text("Only 2:00 left!");
    runTimer();
    $('#game-area').show();
    $("#results").hide();
}
reset();

//Functions to control our timer, make sure it decreases and convert the seconds to min/sec
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
        $("#number-correct").text("Correct: " + numberCorrect);
        $("#number-wrong").text("Wrong: " + numberWrong);
        $('#game-area').hide();
        $("#results").show();
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

//A function to clear our setInterval
function stopTimer () {
    timerRunning = false;
    clearInterval(guessInterval);
}


//Here we make sure you can only select one button at a time in each question and that the answer is stored
//as right or wrong
$(".groupOne").click(function() { 
    var clicked = $(this);
    if (clicked.hasClass('toggle')) {
      $('.groupOne').removeClass('disabled');  
      clicked.removeClass('toggle');
    } else {
      $('.groupOne').removeClass('toggle');
      clicked.addClass('toggle');
      clicked.removeClass('disabled');
      $('.groupOne').not(clicked).addClass('disabled'); 
    }
    if (clicked.val() === "correct") {
        numberCorrect++;
    } else {
        numberWrong++;
    }
  });

$(".groupTwo").click(function() { 
    var clicked = $(this);
    if (clicked.hasClass('toggle')) {
        $('.groupTwo').removeClass('disabled');  
        clicked.removeClass('toggle');
    } else {
        $('.groupTwo').removeClass('toggle');
        clicked.addClass('toggle');
        clicked.removeClass('disabled');
        $('.groupTwo').not(clicked).addClass('disabled'); 
    }
    if (clicked.val() === "correct") {
        numberCorrect++;
    } else {
        numberWrong++;
    }
});

$(".groupThree").click(function() { 
    var clicked = $(this);
    if (clicked.hasClass('toggle')) {
        $('.groupThree').removeClass('disabled');  
        clicked.removeClass('toggle');
    } else {
        $('.groupThree').removeClass('toggle');
        clicked.addClass('toggle');
        clicked.removeClass('disabled');
        $('.groupThree').not(clicked).addClass('disabled'); 
    }
    if (clicked.val() === "correct") {
        numberCorrect++;
    } else {
        numberWrong++;
    }
});

$(".groupFour").click(function() { 
    var clicked = $(this);
    if (clicked.hasClass('toggle')) {
        $('.groupFour').removeClass('disabled');  
        clicked.removeClass('toggle');
    } else {
        $('.groupFour').removeClass('toggle');
        clicked.addClass('toggle');
        clicked.removeClass('disabled');
        $('.groupFour').not(clicked).addClass('disabled'); 
    }
    if (clicked.val() === "correct") {
        numberCorrect++;
    } else {
        numberWrong++;
    }
});

$(".groupFive").click(function() { 
    var clicked = $(this);
    if (clicked.hasClass('toggle')) {
        $('.groupFive').removeClass('disabled');  
        clicked.removeClass('toggle');
    } else {
        $('.groupFive').removeClass('toggle');
        clicked.addClass('toggle');
        clicked.removeClass('disabled');
        $('.groupFive').not(clicked).addClass('disabled'); 
    }
    if (clicked.val() === "correct") {
        numberCorrect++;
    } else {
        numberWrong++;
    }
});

$(".groupSix").click(function() { 
    var clicked = $(this);
    if (clicked.hasClass('toggle')) {
        $('.groupSix').removeClass('disabled');  
        clicked.removeClass('toggle');
    } else {
        $('.groupSix').removeClass('toggle');
        clicked.addClass('toggle');
        clicked.removeClass('disabled');
        $('.groupSix').not(clicked).addClass('disabled'); 
    }
    if (clicked.val() === "correct") {
        numberCorrect++;
    } else {
        numberWrong++;
    }
});

$(".groupSeven").click(function() { 
    var clicked = $(this);
    if (clicked.hasClass('toggle')) {
        $('.groupSeven').removeClass('disabled');  
        clicked.removeClass('toggle');
    } else {
        $('.groupSeven').removeClass('toggle');
        clicked.addClass('toggle');
        clicked.removeClass('disabled');
        $('.groupSeven').not(clicked).addClass('disabled'); 
    }
    if (clicked.val() === "correct") {
        numberCorrect++;
    } else {
        numberWrong++;
    }
});

$(".groupEight").click(function() { 
    var clicked = $(this);
    if (clicked.hasClass('toggle')) {
        $('.groupEight').removeClass('disabled');  
        clicked.removeClass('toggle');
    } else {
        $('.groupEight').removeClass('toggle');
        clicked.addClass('toggle');
        clicked.removeClass('disabled');
        $('.groupEight').not(clicked).addClass('disabled'); 
    }
    if (clicked.val() === "correct") {
        numberCorrect++;
    } else {
        numberWrong++;
    }
});


//Making our submit button work and showing the results page
$("#button-submit").on("click", submit);

function submit () {
    stopTimer();
    $("#timer-display").text("Nice! Check out your results.")
    $("#number-correct").text("Correct: " + numberCorrect);
    $("#number-wrong").text("Wrong: " + numberWrong);
    $('#game-area').hide();
    $("#results").show();
}