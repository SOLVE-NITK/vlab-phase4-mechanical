
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
    question: "When a shaft is subjected to a twisting moment, every cross-section of the shaft will be under",
    answers: {
      a: "tensile stress",
      b: "compressive stress",
      c: "shear stress",
      d: "bending stress"
    },
    correctAnswer: "c"
  },

  {
    question: "The product of the tangential force acting on the shaft and its distance from the axis of the shaft (i.e. the radius of the shaft) is known as",
    answers: {
      a: "bending moment",
      b: "twisting moment",
      c: "torsional rigidity",
      d: "flexural rigidity"
    },
    correctAnswer: "b"
  },

  {
    question: "Which properties ( characteristics) is not required in shaft material.",
    answers: {
      a: "Correct",
      b: " Incorrect"
},
    correctAnswer: "a"
  },
  {
    question: " Is it possible to transmit power between shafts lying in different planes using gears?",
    answers: {
      a: "Yes ",
      b: "No"
    },
    correctAnswer: "a"
  },
  {
    question: " When a solid shaft is subjected to a torsion, the shear stress induced in the shaft at its center is",
    answers: {
      a: "zero",
      b: "maximum",
      c: "average"
      d: "none of these"
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
