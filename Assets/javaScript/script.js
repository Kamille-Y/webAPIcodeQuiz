const startButton = document.getElementById("strt_btn");
const timerEl = document.querySelector("#time");
const nextButton = document.getElementById("nxt_btn");
const submitBtn = document.getElementById("submit")
const headerGreetingElement = document.getElementById("landing_dia");
const questionContainerElement = document.getElementById("question_container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const initialsEl = document.getElementById("initials");
//  this randomizes my questions let allows this to be redefined later
let shuffledQuestions, currentQuestionIndex;
currentQuestionIndex = 0;

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

  if (time < 0) {
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
    console.log(correct);
    if (correct) {
      element.classList.add("correct");
    } else {
      element.classList.add("wrong");
      // time -=10;
    }
  }
  if (!correct) {
    time -= 10;
  }

  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    quizEnd();
    clearInterval(timerId);
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
  endScreenEl.classList.remove("hide");

  // show final score
  var finalScoreEl = document.getElementById("final-score");
  finalScoreEl.textContent = time;
  var questionContainerElement = document.getElementById("question_container");
  questionContainerElement.classList.add("hide");
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
// grabbing value from input box
function topScores() {
  initials = initialsEl.value.trim();
  if (initials !== "") {
    var topScores =
      // this retrieves highscores from the local storage or returns an empty array
      JSON.parse(windows.localStorage.getItem("topScores")) || [];
    // new score object from current player
    var currentScore = {
      score: time,
      initials: initials,
    };

    // saving scores to pc
    topScores.push(currentScore);
    window.localStorage.setItem("topScores", JSON.stringify(Scores));
    //redirect to score html
    window.location.href = "Score.html";
  }
}

function checkForEnter(event) {
  // "13" is the enter keycode
  if (event.key === "Enter") {
    saveTopscores();
  }
}
// user clicks button to submit initials
submitBtn.onclick = saveTopscores;

initialsEl.onkeyup = checkForEnter;
