
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
    question: "If a beam has a width ‘b’ and a depth ‘d’, find out the moment of inertia about an axis parallel to the width passing through its center on the cross section plane.",
    answers: {
      a: "bd<sup>3/12</sup>",
      b: "bl<sup>2/2</sup>",
      c: "bd<sup>3/3</sup>",
      d: "dl<sup>3/4</sup>"
    },
    correctAnswer: "a"
  },

  {
    question: "The ratio of stress to strain in a body under tension/compression is called",
    answers: {
      a: "young’s modulus of elasticity",
      b: "poisson’s ratio",
      c: "strain hardening",
      d: "toughness"
    },
    correctAnswer: "a"
  },

  {
    question: "A member will begin to permanently deform if stress goes above its",
    answers: {
      a: "yield point",
      b: "elastic limit",
      c: "Both a and b"
    },
    correctAnswer: "c"
  },
  {
    question: "Shear force diagram indicates",
    answers: {
      a: "Type of force acting at any point on the beam",
      b: "hear force acting on the mounting point",
      c: "The shear force exerted on the member",
      d: "both B and C"
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
