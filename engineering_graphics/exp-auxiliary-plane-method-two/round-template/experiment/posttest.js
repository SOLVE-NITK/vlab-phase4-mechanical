
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
    question: "The shortest distance between two parallel lines is equal to the length of the perpendicular drawn between them. If its true length is to be measured, then the two given parallel line should be shown in their _______ views.",
      answers: {
        a: "Top",
        b: "Front",
        c: "Point",
        d: "Line"
      },
      correctAnswer: "c"
    },
    {
      question: "Plane which are inclined to both the reference plane are called _______",
      answers: {
        a: "Vertical planes",
        b: "Inclined planes",
        c: "Horizontal planes",
        d: "Oblique planes"
      },
      correctAnswer: "d"
    },
    {
      question: "What are the non-parallel and non-intersecting line called _______",
      answers: {
       	a: "Orthographic projection",
        b: "Trimetric projection",
        c: "Dimetric projection",
        d: "Isometric projection"
      },
      correctAnswer: "b"
    },
    {
      question: "The plane appears as a foreshortened surface in all the projection planes is known as _______",
      answers: {
       	a: "Parallel plane",
        b: "Vertical plane",
        c: "Slant plane",
        d: "Horizontal plane"
      },
      correctAnswer: "c"
    },
  {
    question: " What is the angle between AIP and VP",
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
