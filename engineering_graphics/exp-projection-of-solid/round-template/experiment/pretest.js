
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
      question: "If the solid is positioned that its axis is perpendicular to one of the reference planes. Which of the following is false?",
      answers: {
        a: "Axis is parallel to another reference plane.",
        b: "Base is parallel to the reference plane",
        c: "Projection on the plane gives its true shape of the base.",
        d: "Base is perpendicular to the horizontal plane"
      },
      correctAnswer: "d"
    },
    {
      question: "If the solid’s axis is perpendicular to one of the reference planes then the projection of solid on to the same plane gives the true shape and size of its _______",
      answers: {
        a: "Lateral geometry",
        b: "Base",
        c: "Cross-section",
        d: "Surface"
      },
      correctAnswer: "b"
    },
    {
      question: "When the axis of solid is perpendicular to VP, the _______view should be drawn first and _______view then projected from it.",
      answers: {
       	a: "Front, Top",
        b: "Top, Side",
        c: "Side, Front",
        d: "Top, Front"
      },
      correctAnswer: "a"
    },
    {
      question: "When the axis of solid is perpendicular to HP, the _______view should be drawn first and _______view then projected from it.",
      answers: {
       	a: "Front, Top",
        b: "Top, Side",
        c: "Side, Front",
        d: "Top, Front"
      },
      correctAnswer: "d"
    },
    {
      question: "Front view and top view of which solid is same ",
      answers: {
        a: "Sphere & Cube",
        b: "Cube & Cuboid",
        c: "Cuboid & Sphere",
        d: "None"
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
