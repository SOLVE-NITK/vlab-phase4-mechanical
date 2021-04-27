
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


{/* <img src=\'images\/q1.png' */}

// Write your MCQs here --- Start --- --------------------

const myQuestions = [
  {
    question: "What is the value of the radius of gyration of disc type flywheel as compared to a rim type flywheel for the same diameter?<br/><img src=\'images\/q1.png'/>",
    answers: {
      a: "x = Rθ, x = Rθ",
      b: "x = Rθ, x < Rθ",
      c: "x < Rθ, x > Rθ"
    },
    correctAnswer: "b"
  },

  {
    question: "The effective radius of the driving and driven pulleys change due to",
    answers: {
      a: "difference between input & output RPM",
      b: "springs and fly-weights",
      c: "both (a) and (b)",
      d: "due to the shape of the pulley"
    },
    correctAnswer: "b"
  },

  {
    question: "A rigid body is in equilibrium if",
    answers: {
      a: "τnet = 0",
      b: "Fnet = 0",
      c: "Both a and b"
    },
    correctAnswer: "c"
  },
  {
    question: "Given the effective radius of driving pulley to be 100mm and that of driven pulley to be 200mm, find out the effective gear ratio",
    answers: {
      a: "2",
      b: "0.5",
      c: "0.33333",
      d: "4"
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
