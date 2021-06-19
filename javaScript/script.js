const startButton = document.getElementById('strt_btn')
const nextButton = document.getElementById('nxt_btn')
const headerGreetingElement = document.getElementById('landing_dia')
const questionContainerElement = document.getElementById('question_container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
//  this randomizes my questions let allows this to be redefined later
let shuffledQuestions, currentQuestionIndex
// start and toggle
startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})



function startQuiz(){
  console.log('started')
  // this hides the start button after it has been pressed 
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  headerGreetingElement.classList.add('hide')
  questionContainerElement.classList.remove('hide')
  setNextQuestion()

}

function setNextQuestion() {
 resetState()
 showQuestion(shuffledQuestions[currentQuestionIndex])
}


function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', answerSelection)
    answerButtonsElement.appendChild(button)

  })
}
function resetState() {
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild
    (answerButtonsElement.firstChild)
  }
}


function answerSelection(e){
  const selectButton = e.target
  const correct = selectButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1){
    nextButton.classList.remove('hide')
} else {
  startButton.innerText = 'Restart'
  startButton.classList.remove('hide')

}
}

function setStatusClass(element, correct){
  clearStatusClass(element)
  if (correct){
    element.classList.add('correct')
 } else {
   element.classList.add('wrong')
 }
}
function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Which one is a looping structure in JavaScript?',
    answers: [
      { text: 'All of the Above', correct: true},
      { text:  'For', correct: false},
      { text: 'while', correct: false },
      { text: 'do-while loops', correct: false}
    
    ]
    
  },
  {
    question: 'What are the two basic groups of data types in JavaScript?',
    answers: [
      { text: 'Primitive and Attributes', correct: false},
      { text:  'Primitive and Reference', correct: true},
      { text: 'Reference types and Attributes', correct: false },
      { text: 'None of the above', correct: false}
    
    ]
    
  },
  {
    question: 'Which one is a looping structure in JavaScript?',
    answers: [
      { text: 'All of the Above', correct: true},
      { text:  'For', correct: false},
      { text: 'while', correct: false },
      { text: 'do-while loops', correct: false}
    
    ]
    
  },
  {
    question: 'Which one is a looping structure in JavaScript?',
    answers: [
      { text: 'All of the Above', correct: true},
      { text:  'For', correct: false},
      { text: 'while', correct: false },
      { text: 'do-while loops', correct: false}
    
    ]
    
  },
  {
    question: 'Which one is a looping structure in JavaScript?',
    answers: [
      { text: 'All of the Above', correct: true},
      { text:  'For', correct: false},
      { text: 'while', correct: false },
      { text: 'do-while loops', correct: false}
    
    ]
    
  },
  
]



