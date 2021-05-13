
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
    question: "To save space on drawing or to save time _______ view may be drawn.",
    answers: {
    	a: "Half auxiliary",
        b: "Full auxiliary",
        c: "Front",
        d: "Top"
    },
    correctAnswer: "a"
  },

  {
    question: "Auxiliary views tend to make use of _______ projection.",
    answers: {
      a: "Orthographic projection",
      b: "Axonometric projection",
      c: "Oblique projection",
      d: "Isometric projection"
    },
    correctAnswer: "b"
  },

  {
    question: " In _______ the parallel projection rays are not perpendicular to the viewing plane as with orthographic projection but strike the projection plane at an angle other than 90 degrees.",
    answers: {
  	  a: "Orthographic projection",
      b: "Axonometric projection",
      c: "Oblique projection",
      d: "Isometric projection"
    },
    correctAnswer: "d"
  },
  {
    question: "  The front and top view sometimes are not sufficient to convey all the information regarding the object. Additional views are therefore projected on other planes known as _______.",
    answers: {
      a: "Auxiliary vertical plane",
      b: "Auxiliary inclined plane",
      c: "Auxiliary plane",
      d: "Horizontal & Vertical plane"
    },
    correctAnswer: "c"
  },
  {
    question: " What is the angle between AVP and HP",
    answers: {
      a: "90 deg",
      b: "180 deg",
      c: "0 deg",
      d: "Can be anything"
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
