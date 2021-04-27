
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");


// Don't touch the above code




// Write your MCQs here --- Start --- --------------------

const myQuestions = [
  {
    question: "Which is the wrong statement from the below option?",
    answers: {
      a: "As far as possible all dimensions should be given in millimeter, omitting the abbreviation mm.",
      b: "The height of the dimension figures should be from 3mm to 5mm.",
      c: "A zero must always precede the decimal point when the dimension is less than unity.",
      d: "The dimensions should only be given in mm."
    },
    correctAnswer: "d"
  },

  {
    question: " Dimension line should be drawn at least______mm away from the outlines and each other",
    answers: {
      a: "5",
      b: "6",
      c: "7",
      d: "8"
    },
    correctAnswer: "d"
  },

  {
    question: "Location and datum dimensions indicates _____",
    answers: {
      a: "Length",
      b: "Diameter",
      c: "Height",
      d: "Position"
    },
    correctAnswer: "b"
  },
  {
    question: "The dimension should be given to which of the following lines?",
    answers: {
      a: "Outline",
      b: "Hidden line",
      c: "Centerline",
      d: "Leader line"
    },
    correctAnswer: "a"
  },
  {
    question: "What is the method used for construction of Polygon in this experiment?",
    answers: {
      a: "Inscribed circle method",
      b: "Outscribed circle method",
      c: "Tangent circle method",
      d: "Angled circle method"
    },
    correctAnswer: "a"
  }
];





// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
