
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
    question: " The volume of metal that enters the rolling stand ",
    answers: {
      a: " should increase after rolling process ",
      b: "should decrease after rolling process",
      c: "should remain the same after the rolling process",
      d: " unpredictable"
    },
    correctAnswer: "c"
  },

  {
    question: "In rolling, the pressure is maximum at",
    answers: {
      a: " entrance",
      b: "exit",
      c: "both heat and pressure",
      d: "none of the above"
    },
    correctAnswer: "d"
  },

  {
    question: " In rolling a strip between two rolls, the position of the neutral point in the arc of contact does not depend on ",
    answers: {
      a: "Amount of reduction",
      b: "Material of the rolls",
      c: " Diameter of the rolls",
      d: "Coefficient of friction"
    },
    correctAnswer: "b"
  },
  {
    question: "Which of the following statement is not true ",
    answers: {
      a: " velocity of metal at exit is same as that at the entry",
      b: "grains are elongated in the direction of rolling",
      c: "after crossing the stress zone the grain starts refining",
      d: "the greater the coefficient of friction more the possible reduction"
    },
    correctAnswer: "a"
  },
  {
    question: "In rolling, the point of maximum pressure is called",
    answers: {
      a: "Slip point",
      b: "No-slip point",
      c: "Neutral point",
      d: " Extreme point"
    },
    correctAnswer: "b"
  },
  {
    question: "The maximum possible draft in cold rolling of the sheet increases with the",
    answers: {
      a: "Increase in coefficient of friction",
      b: " Decrease in coefficient of friction",
      c: " Decrease in roll radius",
      d: "Increase in roll velocity"
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
