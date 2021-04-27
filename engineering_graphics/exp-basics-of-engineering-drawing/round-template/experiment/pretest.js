
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
      question: "The ratio of height to length of an arrow in dimensioning is?",
      answers: {
        a: "1:2",
        b: "1:3",
        c: "1:4",
        d: "1:5"
      },
      correctAnswer: "B"
    },
    {
      question: "Dimensioning doesn't represent",
      answers: {
        a: "Height",
        b: "Length",
        c: "Depth",
        d: "material"
      },
      correctAnswer: "d"
    },
    {
      question: " An outline or a centerline should be used as a dimension line.      ",
      answers: {
        a: "true",
        b: "false",
        c: "Cannot be said",
        d: "None of the above"
      },
      correctAnswer: "b"
    },
    {
      question: " The advised position of placement of dimensions should be______",
      answers: {
        a: "Inside the view",
        b: "Outside the view",
        c: "On the boundaries of the view",
        d: "Cutting the view"
      },
      correctAnswer: "c"
    },
    {
      question: " If an angle of 60deg is bisected, what will be the angle made by the bisected line to original lines.",
      answers: {
        a: "30deg",
        b: "40deg",
        c: "60deg",
        d: "120deg"
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
