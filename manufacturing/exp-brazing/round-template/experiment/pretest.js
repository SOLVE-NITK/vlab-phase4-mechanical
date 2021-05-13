
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
    question: " The commonly used flux for brazing is ",
    answers: {
      a: " Borax ",
      b: "Zinc chloride",
      c: "Lead sulphate",
      d: "Soft iron"
    },
    correctAnswer: "a"
  },

  {
    question: "The filler material used in brazing has a melting point above",
    answers: {
      a: "300°C",
      b: "420°C",
      c: "480°C",
      d: "520°C"
    },
    correctAnswer: "b"
  },

  {
    question: " Flux is used in brazing to ",
    answers: {
      a: "Prevent steel from oxidizing during the brazing process",
      b: "Speed up the brazing process",
      c: "Clean the metal by dissolving any oxide already present",
      d: "Coefficient of friction"
    },
    correctAnswer: "c"
  },
  {
    question: "Why would it be impossible to braze aluminium with normal brass brazing rods? ",
    answers: {
      a: "Because aluminium is too hard",
      b: "Because aluminium has a too low melting point and would melt before the brass",
      c: "Because aluminium has a too high melting point and will not melt",
      d: "Because aluminium is a non-ferrous metal"
    },
    correctAnswer: "b"
  }
];





// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
