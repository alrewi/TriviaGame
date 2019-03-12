var spaceQuestions = {
    one: {
        question: "What kind of star has a density so high that a teaspoonful of its matter would weigh more than all the people on Earth?",
        answers: {
            one: "A neutron star", 
            two: "A red giant star", 
            three: "A white dwarf star", 
            four: "A crazy dense star"
        },
        correct: "A neutron star"
    },
    two: {
        question: "What name was given to the invisible material once thought to occupy all space?",
        answers: {
            one: "Air", 
            two: "Ether", 
            three: "The Great Permeator", 
            four: "Nothing"
        },
        correct: "Ether"
    },
    three: {
        question: "What is the name of the theory that asserts that the universe appears the same wherever and whenever it is viewed?",
        answers: {
            one: "Wherever-Whenever Theory", 
            two: "Chaotic Inflation Theory", 
            three: "The Big Bang Theory", 
            four: "Steady State Theory"
        },
        correct: "Steady State Theory" 
    },
    four: {
        question: "Approximately how old is the universe?",
        answers: {
            one: "The universe is cyclically created and destroyed", 
            two: "6,000 years", 
            three: "13.8 billion light years", 
            four: "155 trillion years"
        },
        correct: "13.8 billion light years"
    },
    five: {
        question: "Approximately what percent of the matter in the universe is dark matter?",
        answers: {
            one: "27%", 
            two: "Dark matter isn't real", 
            three: "50%", 
            four: "95%"
        },
        correct: "95%"
    },
    six: {
        question: "What is the largest type of star in the universe?",
        answers: {
            one: "A red supergiant star", 
            two: "A humongostar", 
            three: "A white dwarf star", 
            four: "The sun"
        },
        correct: "A red supergiant star"
    },
    seven: {
        question: "What is believed to exist at the center of nearly every galaxy, including our own Milky Way?",
        answers: {
            one: "Another dimension", 
            two: "A supermassive black hole", 
            three: "A galaxy has no center", 
            four: "A nebula"
        },
        correct: "A supermassive black hole"
    },
    eight: {
        question: "How long does it take sunlight to travel to the earth?",
        answers: {
            one: "24 hours", 
            two: "20 minutes", 
            three: "8 minutes", 
            four: "It's instantaneous"
        },
        correct: "8 minutes"
    }
}

var timeLeft = 30;
var timerRunning = false;
var correctAnswer;
var numberCorrect = 0;
var numberWrong = 0;
var noAnswer = 0;

function reset () {
    $("#question").text(spaceQuestions.one.question);
    $("#question").css("background-image", 'url("assets/images/hubble-1632627-640x360.jpg")');
    $("#button-1").text(spaceQuestions.one.answers.one);
    $("#button-2").text(spaceQuestions.one.answers.two);
    $("#button-3").text(spaceQuestions.one.answers.three);
    $("#button-4").text(spaceQuestions.one.answers.four);
    $("#timer-display").text("30");
    $("#result-display").text("");

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
    $("#timer-display").text(timeLeft);
    timeLeft--;
    if (timeLeft < 0) {
        noAnswer++;
        $("#result-display").text("Time's up! The correct answer was " + correctAnswer + ".");
        stopTimer();
    }
}

function stopTimer () {
    timerRunning = false;
    clearInterval(guessInterval);
}
