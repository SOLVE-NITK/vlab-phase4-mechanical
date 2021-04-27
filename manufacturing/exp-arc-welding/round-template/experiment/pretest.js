
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
    question: " Which of the following statement is true?",
    answers: {
      a: " lap joint eliminates eccentricity of applied load, butt joint results in eccentricity at the connection",
      b: "lap joint and butt joint eliminates eccentricity at the connection",
      c: "lap joint results in the eccentricity of applied load, butt joint eliminates eccentricity at the connection",
      d: " lap joint and butt joint results in the eccentricity of applied loads"
    },
    correctAnswer: "c"
  },

  {
    question: "In the case of a flywheel, the maximum fluctuation energy is the",
    answers: {
      a: "pressure",
      b: "heat",
      c: "both heat and pressure",
      d: "none of the above"
    },
    correctAnswer: "b"
  },

  {
    question: " In arc welding, the temperature of the arc is of the order of",
    answers: {
      a: "100° C",
      b: "1000° C",
      c: "3500° C",
      d: "35000° C"
    },
    correctAnswer: "c"
  },
  {
    question: "Grey iron is usually welded by ",
    answers: {
      a: " Gas welding",
      b: "Arc welding",
      c: "Resistance welding",
      d: "MIG"
    },
    correctAnswer: "a"
  },
  {
    question: "Which type of joint is used if plate thickness is less than 5 mm?",
    answers: {
      a: "Single V butt weld",
      b: "Single U butt weld",
      c: "Square butt weld",
      d: "Double U butt weld"
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
