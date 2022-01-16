// Time
var time = document.querySelector("#time");
var timeLeft = 75;
var score = document.querySelector("#score");

// Buttons
var startButton = document.querySelector("#start");
var answerButton = document.querySelectorAll("button.ansBtn")
var ans1Btn = document.querySelector("#answer1");
var ans2Btn = document.querySelector("#answer2");
var ans3Btn = document.querySelector("#answer3");
var ans4Btn = document.querySelector("#answer4");
var submitScore = document.querySelector("#submit-score");
var goBack = document.querySelector("#goback");
var clearScore = document.querySelector("#clearscores");
var viewScore = document.querySelector("#view-scores");

// Quiz Questions
var questions = [
    { question: "Commonly used data types DO NOT include:",
      answer: "alerts",
      choices: ["strings", "booleans", "alerts", "numbers"]
    },

    { question: "The condition in an if/else statement is enclosed with ______.",
      answer: "curly brackets",
      choices: ["quotes", "curly brackets", "parenthesis", "square brackets"]
    },

    { question: "Arrays in JavaScript can be used to store ______.",
      answer: "all of the above",
      choices: ["numbers and strings", "other arrays", "booleans", "all of the above"]
    },

    { question: "String values must be enclosed in ______ when being assigned to variables",
      answer: "quotes",
      choices: ["commas", "curly brackets", "quotes", "parenthesis"]
    },

    { question: "A very useful tool used during development and for printing content to the debugger is:",
      answer: "console.log",
      choices: ["JavaScript", "terminal/basg", "for loops", "console.log"]
    }
]

// Functions

// Start Quiz
startButton.addEventListener("click", startQuiz);

