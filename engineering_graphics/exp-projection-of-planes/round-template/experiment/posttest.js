
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
      question: "If the laminar true shape obtained on VP then",
      answers: {
        a: "It is Parallel to HP",
        b: "It is parallel to VP",
        c: " Perpendicular to VP",
        d: " Both B & C"
      },
      correctAnswer: "d"
    },
    {
     question: "A circular lamina inclined to VP appears in the front view as an ellipse of the major axis 30mm and the minor axis is 15mm. The major axis is parallel to both HP and VP. One end of the minor axis is in both HP and VP. Determine the inclination of the lamina with the VP.",
      answers: {
       	a: "45 degrees",
        b: "90 degrees",
        c: "60 degrees",
        d: "105 degrees"
      },
      correctAnswer: "c"
    },
    {
    question: "A plane surface may be positioned in a space concerning the three principal planes of projection in any of the following positions, which one of the following is false?",
      answers: {
       	a: "Parallel to one of the principal planes and perpendicular to the other two",
        b: "Perpendicular to one of the principal planes and inclined to the other two.",
        c: "Parallel to both the planes",
        d: "Inclined to all the three principal planes."
      },
      correctAnswer: "c"
    },
    {
      question: " A equilateral triangular lamina of 25mm sides lies with one of its edges on HP such that the surface of the lamina is inclined to HP 60 degrees. How many lines with 3 coordinates will appear during the projection?",
      answers: {
       	a: "5",
        b: "6",
        c: "3",
        d: "2"
      },
      correctAnswer: "d"
    },
  {
    question: "A mirror of 30mm*40mm is inclined to the wall such that its frontview is a square of 30mm side. The longer side of the mirror appears perpendicular to both HP and VP. Find the inclination of the mirror with the wall.",
    answers: {
      a: "48.76 degrees",
      b: "36.78 degrees",
      c: "51.76 degrees",
      d: "41.41 degrees"
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
