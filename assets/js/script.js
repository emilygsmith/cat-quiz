let quizQuestions = [
    {
        question: '1. What is the most popular breed in the UK?',
        options: ['Maine Coon', 'British Shorthair', 'Ragdoll', 'Russian Blue'],
        answer: 'British Shorthair'
    },
    
    {
        question: '2. What age was the oldest cat ever recorded?',
        options: ['38', '35', '29', '45'],
        answer: '38'
    },
    {
        question: "3. What is the world's largest cat species?'",
        options: ['Lion', 'Siberian Tiger', 'Jaguar', 'Snow Leopard'],
        answer: 'Siberian Tiger'
    },
    {
        question: '4. What percentage of their life do cats spend sleeping?',
        options: ['30%', '90%', '50%', '70%'],
        answer: '70%'
    },
    {
        question: "5. What is the average length of a cat's pregnancy?",
        options: ['Four months', 'One month', 'Two months', 'Six weeks'],
        answer: 'Two months'
    },
    {
        question: "6. What is a cheetah's top speed?",
        options: ['100mph', '75mph', '40mph', '130mph'],
        answer: '75mph'
    },
    {
        question: '7. How many whiskers does a cat have on average?',
        options: ['15', '40', '24', '12'],
        answer: '24'
    },
    {
        question: '8. Which of these is not a famous feline from a movie/TV show?',
        options: ['James', 'Salem', 'Mrs Norris', 'Aslan'],
        answer: 'James'
    },
    {
        question: "9. The GCCF is the UK's largest pedigree registry. What does it stand for?",
        options: ['Grand Council of the Cat Foundation', 'Governing Council of Competitive Felines', 'Grant Convention of the Cat Fancy', 'Governing Council of the Cat Fancy'],
        answer: 'Governing Council of the Cat Fancy'
    },
    {
        question: '10. What do scientists believe is the total number of domesticated cats in the world?',
        options: ['200 million', '600 million', '1 billion', '100 million'],
        answer: '600 million'
    }
];

// Initialize variables
let currentQuestion = 0;
var score = 0;

// Function to display the current question
function displayQuestion() {
  var questionContainer = document.getElementById("question-container");
  var question = quizQuestions[currentQuestion];
  var options = question.options;

  questionContainer.innerHTML = "";

  var questionElement = document.createElement("h3");
  questionElement.textContent = question.question;
  questionContainer.appendChild(questionElement);

  for (var i = 0; i < options.length; i++) {
    var optionElement = document.createElement("button");
    optionElement.textContent = options[i];
    optionElement.addEventListener("click", checkAnswer);
    questionContainer.appendChild(optionElement);
  }
}

// Check selected answer
function checkAnswer(event) {
  var selectedOption = event.target.textContent;
  var question = quizQuestions[currentQuestion];

// Check selected option correct
  if (selectedOption === question.answer) {
    score++;
  }

// Move to next question
  currentQuestion++;

// Check whether quiz completed
  if (currentQuestion === quizQuestions.length) {
    displayResult();
  } else {
    displayQuestion();
  }
}

// Display result
function displayResult() {
  var resultContainer = document.getElementById("result-container");
  resultContainer.innerHTML = "";

  var resultElement = document.createElement("h3");
  resultElement.textContent = "Huzzah, you've finished with a respectable score of " + score + "/10. Hope you've learnt some interesting cat facts along the way!";
  resultContainer.appendChild(resultElement);
}

// Start quiz
displayQuestion();