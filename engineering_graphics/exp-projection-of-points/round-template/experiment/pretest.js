
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
    question: "If the point lies in the fourth quadrant it’s front view will lie _____ XY line",
    answers: {
      a: "above",
      b: "below",
      c: "on the",
      d: "none"
    },
    correctAnswer: "b"
  },

  {
    question: "If a point P is placed in between the projection planes. The distance from side view to reference line towards front view and the distance between top view and reference line towards top view will be same.",
    answers: {
      a: "true",
      b: "false",
      c: "can't say",
      d: "none of these"
    },
    correctAnswer: "a"
  },

  {
    question: "A point in 2nd quadrant is 15cm away from both the horizontal and vertical plane and orthographic projection are drawn. The distance between the points formed by front view and top view is ____",
    answers: {
      a: "0",
      b: "30",
      c: "15",
      d: "15+ from profile plane"
    },
    correctAnswer: "a"
  },
  {
    question: "Projection of a point in the third quadrant will be",
    answers: {
      a: "Front view in VP",
      b: "ront view in HP",
      c: "Front view in PP",
      d: "none"
    },
    correctAnswer: "a"
  },
  {
    question: "Projection of a point in the first quadrant will be",
    answers: {
      a: "Front view in VP",
      b: "ront view in HP",
      c: "Front view in PP",
      d: "none"
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
