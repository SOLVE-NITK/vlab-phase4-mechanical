
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
      question: "Two points are placed in 1st quadrant of projection planes such that the line joining the points is perpendicular to the profile plane the side view and top view will be ____?",
      answers: {
        a: "Single point, Two-point",
        b: "Two-point, Single point",
        c: "Single point, Single point",
        d: "Two-point,Two-point"
      },
      correctAnswer: "a"
    },
    {
      question: "A point is 5m away from the VP and 4m away from PP and 3m away from the HP in 1st quadrant then projections are drawn on paper the distance between the front view and top view is _____",
      answers: {
        a: "7m",
        b: "8m",
        c: "9m",
        d: "5m"
      },
      correctAnswer: "b"
    },
    {
      question: " If the point lies on XY line then it lies ___     ",
      answers: {
        a: "First quadrant",
        b: "Second quadrant",
        c: "Third quadrant",
        d: "Lies on the origin"
      },
      correctAnswer: "d"
    },
    {
      question: "If the point is 4m in front of VP and 3m above HP then in XY line divide the distance between the front view and top view in ____ ratio",
      answers: {
        a: "4:3",
        b: "3:4",
        c: "7:4",
        d: "7:3"
      },
      correctAnswer: "b"
    },
    {
      question: " Front view and top view projection of point lies in above XY line in orthographic projection, then its X and Y coordinates are",
      answers: {
        a: "Positive and Negative",
        b: "Positive and Positive",
        c: "Negative and Positive",
        d: "Negative and Negative"
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
