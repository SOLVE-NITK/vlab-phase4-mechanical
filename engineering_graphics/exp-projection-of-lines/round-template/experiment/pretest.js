
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
      question: "When line is parallel to both VP and HP,we can get it’s true length in _____",
      answers: {
        a: "Top View",
        b: "Front View",
        c: "Both TV & FV",
        d: "Side View"
      },
      correctAnswer: "c"
    },
    {
      question: "Top view of a line perpendicular to HP have ____",
      answers: {
        a: "Line shorter than the true length",
        b: "Line equal to the true length",
        c: "Point",
        d: "Any of the above"
      },
      correctAnswer: "c"
    },
    {
      question: "True inclination of line with HP is denoted by ",
      answers: {
        a: "α",
        b: "β",
        c: "Φ",
        d: "θ"
      },
      correctAnswer: "d"
    },
    {
      question: "Side view of line perpendicular to VP and perpendicular to HP is______",
      answers: {
        a: "Point",
        b: "Same line",
        c: "Smaller than the given line",
        d: "Bigger than the given line"
      },
      correctAnswer: "b"
    },
    {
      question: "A line can be parallel to both HP and VP",
      answers: {
        a: "true",
        b: "false",
        c: "can't say",
        d: "none of these"
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
