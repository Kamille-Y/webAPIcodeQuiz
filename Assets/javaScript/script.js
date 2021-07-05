const startButton = document.getElementById("strt_btn");
const timerEl = document.querySelector("#time");
const nextButton = document.getElementById("nxt_btn");
const headerGreetingElement = document.getElementById("landing_dia");
const questionContainerElement = document.getElementById("question_container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
//  this randomizes my questions let allows this to be redefined later
let shuffledQuestions, currentQuestionIndex;
currentQuestionIndex = 0

// timer elements 10 sec per question
var time = questions.length * 15;
var timerId;

// start and toggle
startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startQuiz() {
  console.log("started");
  // this hides the start button after it has been pressed
  var startPageEl = document.getElementById("landing_dia");
  startPageEl.setAttribute("class", "hide");
  startButton.classList.add("hide");

  shuffledQuestions = questions.sort(() => Math.random() - 0.5);

  currentQuestionIndex = 0;

  headerGreetingElement.classList.add("hide");
  //removes hide from questions

  questionContainerElement.classList.remove("hide");

  // start timer
  timerId = setInterval(quizTimer, 1000);

  // show starting time
  timerEl.textContent = time;

<<<<<<< HEAD
 if (time < 0) {
=======
  if (this.value !== questions[currentQuestionIndex].answer, "wrong") {
    // time penalty
    time -= 10;
  
  }if (time < 0) {
>>>>>>> babb3e453338f41fcd1f2c9cfe114e3f1523a2ac
      time = 0;
    }

  setNextQuestion();
}

// Get current question object from array of questions
function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
  
}

function showQuestion(question) {
  questionElement.innerText = question.question;

  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", answerSelection);
    answerButtonsElement.appendChild(button);
  });
}
function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function answerSelection(e) {
  const selectButton = e.target;
  const correct = selectButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });

  function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
      element.classList.add("correct");
    } else {
      element.classList.add("wrong");
    }
    if (this.value !== questions[currentQuestionIndex].answer, "wrong") {
      // time penalty
      time -= 2;}
  }

  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }
}


function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

function quizEnd() {
  // stop timer
  clearInterval(timerId);

  // show end screen
  var endScreenEl = document.getElementById("end-quiz");
  endScreenEl.removeAttribute("class");

  // show final score
  var finalScoreEl = document.getElementById("final-score");
  finalScoreEl.textContent = time;
}

function quizTimer() {
  // update time
  time--;
  timerEl.textContent = time;
  // check if user ran out of time
  if (time <= 0) {
    quizEnd(); 
  }
  function quizEnd() {
    // stop timer
    clearInterval(timerId);
  }
}

