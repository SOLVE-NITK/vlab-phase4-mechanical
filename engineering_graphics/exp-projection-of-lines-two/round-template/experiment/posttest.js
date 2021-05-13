
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
    question: "Traces are defined as points at which line or produced line meets  the HP or VP",
    answers: {
    	a: "True",
        b: "False",
        c: "Can't say",
        d: "Both are not related"
    },
    correctAnswer: "b"
  },

  {
    question: "For line parallel to VP and perpendicular to HP",
    answers: {
      a: "HT will exist",
      b: "VT will exist",
      c: "Both exists",
      d: "None of these"
    },
    correctAnswer: "a"
  },

  {
    question: "A line inclined to VP and parallel to HP will have its Front view",
    answers: {
      a: "Of shorter Length",
      b: "Bigger length",
      c: "Equal length",
      d: "None"
    },
    correctAnswer: "c"
  },
  {
    question: "A line inclined to both VP & HP, and parallel to PP, its true length will observe in",
    answers: {
      a: "Front View",
      b: "Side View",
      c: "Top View",
      d: "None"
    },
    correctAnswer: "b"
  },
  {
    question: " If a line RS lies on both vertical and horizontal planes then which of the following two views coincides to give a line again?",
    answers: {
      a: "Front, Top",
      b: "Top, Side",
      c: "Side, Isometric",
      d: "Isometric, Front"
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
