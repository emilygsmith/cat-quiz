let questions = [
    {
        question: "1. What is the most popular breed in the UK?",
        options: [
            {option: 'Maine Coon', answer: false},
            {option: 'British Shorthair', answer: true},
            {option: 'Ragdoll', answer: false}
        ],
        
    },
    {
        question: '2. What age was the oldest cat ever recorded?',
        options: [ 
            {option: '38', answer: true},
            {option: '35', answer: false},
            {option: '29', answer: false}
        ],
    },
]

if (i == parseInt(question.correctAnswer)) {
    result.innerHTML = "Correct";
  } else {
    result.innerHTML = "Incorrect";
  } 
  
let score = 0

let question = document.getElementsByClassName('question');

let result = document.getElementsByClassName('result');
result[0].innerText = "";