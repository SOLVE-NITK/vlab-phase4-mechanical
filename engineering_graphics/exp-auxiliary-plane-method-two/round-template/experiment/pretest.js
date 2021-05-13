
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
      question: "Auxiliary view cannot be used for determining __________.",
      answers: {
        a: "True length of the line",
        b: "Point view of the line",
        c: "Edge view of Line",
        d: "The apparent size"
      },
      correctAnswer: "d"
    },
    {
      question: "Auxiliary plane are of _______ type. ",
      answers: {
        a: "2",
        b: "6",
        c: "1",
        d: "3"
      },
      correctAnswer: "b"
    },
    {
      question: "What are the non-parallel and non-intersecting line called _______",
      answers: {
       	a: "Spiral line",
        b: "Parallel line",
        c: "Skew line",
        d: "Perpendicular line"
      },
      correctAnswer: "c"
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
      question: "Auxiliary Vertical Plane’s Inclination is denoted by which symbol  ",
      answers: {
        a: "φ",
        b: "α",
        c: "β",
        d: "θ"
      },
      correctAnswer: "c"
    }
  ];


// ---------------------------- End -------------------------------

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
