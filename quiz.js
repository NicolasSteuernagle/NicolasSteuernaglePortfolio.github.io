const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const myQuestions = [
    {
      question: "When Did Javascript first appear?",
      answers: {
        a: "July 24, 1995",
        b: "December 4, 1995",
        c: "August 16, 1995"
      },
      correctAnswer: "b"
    },
    {
      question: "Who owns the trademark for JavaScript?",
      answers: {
        a: "Microsoft",
        b: "Apple",
        c: "Oracle"
      },
      correctAnswer: "c"
    },
    {
      question: "JavaScript is considered a:",
      answers: {
        a: "Weakly Typed Language",
        b: "Poorly Typed Language",
        c: "Strong Typed Language",
      },
      correctAnswer: "a"
    }
  ];

function buildQuiz(){
    const output = [];
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
        const answers = [];
        for(letter in currentQuestion.answers){
            answers.push(
                `<label>
                    <input type = "radio" name = "questions${questionNumber}" value = "${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                    </label>`

            );
        }
        output.push(
            `<div class = "question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
        );
    }
    );
    quizContainer.innerHTML = output.join('');
}
function showResults(){
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;
    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainers = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainers.querySelector(selector) || {}).value;
        if(userAnswer === currentQuestion.correctAnswer){
            numCorrect++;
            answerContainers[questionNumber].style.color = 'lightgreen';
        }
        else{
            answerContainers[questionNumber].style.color = 'red';
        }
    });
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}
buildQuiz();

submitButton.addEventListener('click', showResults);

