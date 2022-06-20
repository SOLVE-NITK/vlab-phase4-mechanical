// Don't touch the below code

(function () {
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
      question: "The arc welding transformer is a ___ transformer.",
      answers: {
        a: "Step Up",
        b: "Step down.",
        c: "One to one",
        d: "None of the above",
      },
      correctAnswer: "b",
    },
    {
      question: "In metal arc welding, the filler material required is",
      answers: {
        a: "Iron",
        b: "Copper",
        c: "Aluminium",
        d: "No filler required",
      },
      correctAnswer: "d",
    },
    {
      question: "In arc welding operations the current value is decided by",
      answers: {
        a: "Size of the electrode",
        b: "The thickness of the plate",
        c: "Length of the welded portion",
        d: "Voltage across the arc",
      },
      correctAnswer: "a",
    },
    {
      question: "Non-consumable electrodes are made of",
      answers: {
        a: "Carbon",
        b: "Graphite",
        c: " Either carbon or graphite",
        d: "Same material as the metal pieces to be welded",
      },
      correctAnswer: "c",
    },
    {
      question: "The-arc-utilized-in-electric-arc-welding is a",
      answers: {
        a: "High voltage, high current discharge",
        b: " Low voltage, low current discharge",
        c: " Low voltage, high current discharge",
        d: " Low voltage, high current discharge",
      },
      correctAnswer: "c",
    },
    {
      question: "Name the material of the core wire of the electrode.",
      answers: {
        a: "Carbon",
        b: "Graphite",
        c: " Either carbon or graphite",
        d: "Same material as the metal pieces to be welded",
      },
      correctAnswer: "d",
    },
  ];

  // ---------------------------- End -------------------------------

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
