
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
      question: "For some case, true length and apparent length can be same.",
      answers: {
        a: "True",
        b: "False",
        c: "Can't say",
        d: "Both are not related"
      },
      correctAnswer: "a"
    },
    {
      question: "Apparent length will be bigger than the True length.",
      answers: {
        a: "True",
        b: "False",
        c: "Can't say",
        d: "Both are not related"
      },
      correctAnswer: "b"
    },
    {
      question: "Locus of Point B in front view is",
      answers: {
        a: "b1",
        b: "b",
        c: "b'",
        d: "None of these"
      },
      correctAnswer: "c"
    },
    {
      question: "If the line is parallel to one plane and perpendicular to another,it has both traces.",
      answers: {
       	a: "True",
        b: "False",
        c: "Can't say",
        d: "Both are not related"
      },
      correctAnswer: "b"
    },
    {
      question: "A line perpendicular to the horizontal plane, its front view will be:",
      answers: {
        a: "Point",
        b: "Line of the same length, perpendicular to HP",
        c: "Line of the same length inclines at some angle to the horizontal plane.",
        d: "Line of length less than the given line."
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
