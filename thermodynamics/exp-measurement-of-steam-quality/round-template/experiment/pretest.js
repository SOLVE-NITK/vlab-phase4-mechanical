
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
    question: "Which of the following processes is an irreversible process?",
    answers: {
      a: "Isothermal",
      b: "Adiabatic",
      c: "Throttling",
      d: "All of the above"
    },
    correctAnswer: "c"
  },

  {
    question: "During the throttling process",
    answers: {
      a: "Heat exchange does not take place",
      b: "No work is done by expanding steam",
      c: "There is no change of internal energy of steam",
      d: "All of the above"
    },
    correctAnswer: "d"
  },

  {
    question: "A positive value of Joule Thomson coefficient of a liquid means",
    answers: {
      a: "Temperature drops during throttling",
      b: "Temperature remains constant",
      c: "Temperature rises during throttling",
      d: " None of the above"
    },
    correctAnswer: "a"
  },
  {
    question: "Throttling process is a/an __ process.",
    answers: {
      a: "Reversible and isothermal",
      b: "Irreversible and constant enthalpy",
      c: "Reversible and constant entropy",
      d: "Reversible and constant enthalpy"
    },
    correctAnswer: "b"
  },
  {
    question: "Which device is used for the expansion of refrigerant in the vapour compression refrigeration cycle?",
    answers: {
      a: "throttling valve",
      b: "capillary tube",
      c: "either throttling valve or capillary tube",
      d: "none of the above"
    },
    correctAnswer: "c"
  },
  {
    question: "In the throttling process",
    answers: {
      a: "h12 = h2",
      b: "h1 = h2",
      c: "h1 = h<sup>2</sup>/h<sup>fg</sup>",
      d: "none of the above"
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
