
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
      question: "Which is the correct front view of given figure?'<br> <img src=\"./images/image12.png\"\ width=300/>'",
      answers: {
        a: '<img src=\"./images/image9.png\"\ width=80/>',
        b: '<img src=\"./images/image2.png\"\ width=80/>',
        c: '<img src=\"./images/image8.png\"\ width=80/>',
        d: '<img src=\"./images/image10.png\"\ width=80/>'
      },
      correctAnswer: "b"
    },
    {
      question: "Which is the correct right side view of the given figure? '<br> <img src=\"./images/image5.png\"\ width=300/>'",
      answers: {
        a: "<img src=\"./images/image16.png\"\ width=80/>",
        b: "<img src=\"./images/image15.png\"\ width=80/>",
        c: "<img src=\"./images/image6.png\"\ width=80/>",
        d: "<img src=\"./images/image17.png\"\ width=80/>"
      },
      correctAnswer: "a"
    },
    {
      question: "Is this an orthographic or isometric view ? '<br> <img src=\"./images/image19.png\"\ width=300/>'",
      answers: {
       	a: "Isometric projection",
        b: "Orthographic projection",
        c: "Neither of those",
        d: "Need more information"
      },
      correctAnswer: "b"
    },
    {
      question: "Recognize the view of the given figure. '<br> <img src=\"./images/image26.png\"\ width=250/>'",
      answers: {
       	a: "Top view",
        b: "Right side view",
        c: "Left side view",
        d: "Front view"
      },
      correctAnswer: "a"
    },
    {
      question: "In orthographic projection, the projection lines are ________ to the projection plane.",
      answers: {
        a: "Parallel",
        b: "Orthogonal",
        c: "Inclined",
        d: "All of the above"
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
