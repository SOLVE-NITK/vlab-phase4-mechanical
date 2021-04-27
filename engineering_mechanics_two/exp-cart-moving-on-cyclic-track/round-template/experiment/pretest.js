
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
    question: "The minimum velocity required by cart at bottom to complete the circular track is :",
    answers: {
      a: "<img src=\'images\/sq1.png'>",
      b: "<img src=\'images\/sq2.png'>",
      c: "<img src=\'images\/sq3.png'>",
      d: "None of these"
    },
    correctAnswer: "a"
  },

  {
    question: "If the velocity given to cart is more than 60m/s will the cart complete it’s motion or not ?",
    answers: {
      a: "Yes",
      b: "No"
    },
    correctAnswer: "a"
  },

  {
    question: "The cart is given velocity of 80m/s the height reached by cart is:",
    answers: {
      a: "180m",
      b: "90m",
      c: "45m",
      d: "None of these"
    },
    correctAnswer: "d"
  },
  {
    question: "Motion of a cart on a circular track is a vertical circular motion",
    answers: {
      a: "True",
      b: "False"
    },
    correctAnswer: "a"
  },
  {
    question: "The cart is given a velocity of 58m/s will the cart complete the circular motion ?",
    answers: {
      a: "Yes",
      b: "No"
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
