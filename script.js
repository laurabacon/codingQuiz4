//variable declarations 
var quizSection = document.getElementById('quiz');
var startButton = document.getElementById('start-button');
var submitButton = document.getElementById('submit-button');
var h1El = document.querySelector('h1');
var pEl = document.querySelector('p');
var inputDiv = document.getElementById('input-radio');

var myQuestions = [
  {
    question: "What does CSS stand for?",
    choices: ["Cascading Style Sheets", "Cascading Soft Sheets", "Case Style Show", "Claustrophobia Style Sheet"],
    answer: 0
  },
  {
    question: "Who invented JavaScript?",
    choices: ["Douglas Crockford", "Sheryl Sandberg", "Brendan Eich", "Bill Gates"],
    answer: 2
  },
  {
    question: "What is NOT a data type?",
    choices: ["String", "Alphabetic", "Numeric", "Boolean"],
    answer: 1
  },
  {
    question: "Arrays in Javascript can be used to ___?",
    choices: ["Objects", "Help Organize and Store Data", "Add Two Values Together", "None of the above"],
    answer: 1
  },
];

var currentQuestionIndex = -1;
var currentAnswerIndex = -1;

function beginQuiz() {
  pEl.remove();

  // Remove existing input element
  inputDiv.innerHTML = '';

  var inputRadio1 = document.createElement("input");
  inputRadio1.type = "radio";
  inputRadio1.textContent = "Choice 1";
  inputDiv.appendChild(inputRadio1);

  startButton.textContent = "Next";
  startButton.addEventListener("click", nextQuestion);
  startButton.removeEventListener("click", beginQuiz);

  for (i = 0; i < myQuestions.length; i++) {
    var question = myQuestions[i].question;
    h1El.textContent = question;
  }

  nextQuestion();
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < myQuestions.length) {
    var question = myQuestions[currentQuestionIndex].question;
    h1El.textContent = question;
  } else {
    return;
  }
}

startButton.addEventListener("click", beginQuiz);