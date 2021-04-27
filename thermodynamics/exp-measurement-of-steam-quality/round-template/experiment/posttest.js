
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
      question: "“The quality of steam at saturated vapour point is 100%”. Please indicate whether this statement is",
      answers: {
        a: "True ",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "For a substance in the two-phase region",
      answers: {
        a: "both pressure and temperature are independent properties",
        b: " if pressure is given, the saturation temperature gets fixed",
        c: "no other property is required to be known",
        d: " all of the mentioned"
      },
      correctAnswer: "b"
    },
    {
      question: "For the measurement of quality, the state of the substance is brought from the two-phase region to",
      answers: {
        a: "single-phase region",
        b: "superheated region",
        c: "both of the mentioned",
        d: "none of the mentioned"
      },
      correctAnswer: "c"
    },
    {
      question: "To fix the state and determine the quality of the mixture, we can do this by",
      answers: {
        a: "adiabatic throttling",
        b: "electric heating",
        c: "both of the mentioned",
        d: "none of the mentioned"
      },
      correctAnswer: "c"
    },
    {
      question: "Throttling calorimeter can be used alone for",
      answers: {
        a: "high dryness fraction upto 0.98",
        b: "very low dryness fraction upto 0.7"
      },
      correctAnswer: "a"
    },
    {
      question: "To be sure that steam after throttling is in the single-phase or superheated region, a minimum of ____ superheat is desired.",
      answers: {
        a: "10 degree Celsius",
        b: "-5 degree Celsius",
        c: "0 degree Celsius",
        d: "5 degree Celsius"
      },
      correctAnswer: "d"
    }
  ];




// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
