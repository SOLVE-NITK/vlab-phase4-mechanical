
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
      question: " Which of the following positions is not possible for a plane?",
      answers: {
        a: "Plane perpendicular to both HP and VP.",
        b: "Plane parallel to both HP and VP.",
        c: "Plane perpendicular to HP, parallel to VP.",
        d: "Plane perpendicular to VP, parallel to HP"
      },
      correctAnswer: "a"
    },
    {
      question: " The true shape of oblique plane obtained in ____",
      answers: {
        a: "HP",
        b: "VP",
        c: "Profile Plane",
        d: "None"
      },
      correctAnswer: "d"
    },
    {
      question: " Top view of circular disk perpendicular to VP will be",
      answers: {
        a: "Line",
        b: "Circle",
        c: "Point",
        d: "an ellipse"
      },
      correctAnswer: "a"
    },
    {
      question: "If the laminar true shape obtained on HP then",
      answers: {
       	a: "It is Parallel to HP",
        b: "It is parallel to VP",
        c: " Perpendicular to VP",
        d: " Both A & C"
      },
      correctAnswer: "d"
    },
    {
       question: "Top view of circular disk inclined to VP will be",
      answers: {
        a: "Line",
        b: "Circle",
        c: "Point",
        d: "An ellipse"
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
