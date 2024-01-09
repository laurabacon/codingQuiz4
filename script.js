var quizSection = document.getElementById("quiz");
var startButton = document.getElementById("start-button");
var submitButton = document.getElementById("submit-button");
var h1El = document.querySelector("h1");
var pEl = document.querySelector("p");
var inputDiv = document.getElementById("input-radio");
var userScore = 0;
var endBox = document.querySelector("#quiz-end");
var end = document.querySelector('.end');
var initialsInput = document.getElementById("initials-input");
var saveScoreButton = document.getElementById("save-score-button");

var myQuestions = [
  {
    question: "What does CSS stand for?",
    choices: [
      "Cascading Style Sheets",
      "Cascading Soft Sheets",
      "Case Style Show",
      "Claustrophobia Style Sheet",
    ],
    answer: "0",
  },
  {
    question: "Who invented JavaScript?",
    choices: [
      "Douglas Crockford",
      "Sheryl Sandberg",
      "Brendan Eich",
      "Bill Gates",
    ],
    answer: "2",
  },
  {
    question: "What is NOT a data type?",
    choices: ["String", "Alphabetic", "Numeric", "Boolean"],
    answer: "1",
  },
  {
    question: "Arrays in Javascript can be used to ___?",
    choices: [
      "Objects",
      "Help Organize and Store Data",
      "Write Code For You",
      "None of the above",
    ],
    answer: "1",
  },
];

var currentQuestionIndex = 0;
var currentAnswerIndex = 0;

function beginQuiz() {
  pEl.remove();
  startButton.textContent = "Next";
  startButton.addEventListener("click", nextQuestion);
  startButton.removeEventListener("click", beginQuiz);

  var question = myQuestions[0].question;
  h1El.textContent = question;
  var choices = myQuestions[currentQuestionIndex].choices;
  nextChoice(choices);
}

function nextQuestion() {
  var aS = document.querySelector('input[name="answer"]:checked').value;

  if (myQuestions[currentQuestionIndex].answer === aS) {
    userScore++;
  }

  currentQuestionIndex++;
  currentAnswerIndex++;

  if (currentQuestionIndex < myQuestions.length) {
    var question = myQuestions[currentQuestionIndex].question;
    h1El.textContent = question;
    var choices = myQuestions[currentAnswerIndex].choices;
    nextChoice(choices);
  } else {
    displayFinalScore();
  }
}

function nextChoice(x) {
  inputDiv.innerHTML = "";

  for (var i = 0; i < x.length; i++) {
    var inputRadio = document.createElement("input");
    inputRadio.type = "radio";
    inputRadio.name = "answer";
    inputRadio.value = i;
    inputDiv.appendChild(inputRadio);

    var label = document.createElement("label");
    label.textContent = x[i];
    label.setAttribute("for", "choice" + i);
    inputDiv.appendChild(label);
  }
}

function displayFinalScore() {
  quizSection.style.display = "none";
  endBox.style.display = "block";

  var finalScoreElement = document.getElementById("final-score");
  finalScoreElement.textContent = "Your Score: " + userScore + "/" + myQuestions.length;
  end.textContent = "Quiz Ended!";

  var initialsSection = document.getElementById("initials-section");
  initialsSection.style.display = "block";
}

saveScoreButton.addEventListener("click", function() {
  var initials = initialsInput.value;
  var scores = JSON.parse(localStorage.getItem("scores")) || [];
  var newScore = {
    initials: initials,
    score: userScore
  };
  scores.push(newScore);
  localStorage.setItem("scores", JSON.stringify(scores));
  initialsInput.value = "";
});

startButton.addEventListener("click", beginQuiz);