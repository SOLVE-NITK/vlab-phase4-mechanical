
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
    question: "What are the three typical orthographic views of drawing?",
      answers: {
        a: "Front,Top and Right side",
        b: "Front,Right side and Isometric",
        c: "Top,Bottom and Right side",
        d: "Top,Front and Left side"
      },
      correctAnswer: "a"
    },
    {
      question: "Which drawing below shows the top view?'<br> <img src=\"./images/image13.png\"\ width=200/>'",
      answers: {
        a: '<img src=\"./images/image28.png\"\ width=150/>',
        b: '<img src=\"./images/image30.png\"\ width=150/>',
        c: '<img src=\"./images/image24.png\"\ width=150/>',
        d: "'<img src=\"./images/image20.png\"\ width=150/>'"
      },
      correctAnswer: "a"
    },
    {
      question: "Is this an orthographic or isometric view ?'<br> <img src=\"./images/image25.png\"\ width=200/>'",
      answers: {
       	a: "Isometric projection",
        b: "Orthographic projection",
        c: "Neither of those",
        d: "Need more information"
      },
      correctAnswer: "b"
    },
    {
      question: "Identify the top view of the given projection.'<br> <img src=\"./images/image18.png\"\ width=200/>'",
      answers: {
       	a: "<img src=\"./images/image23.png\"\ width=120/>",
        b: "<img src=\"./images/image11.png\"\ width=120/>",
        c: "<img src=\"./images/image3.png\"\ width=120/>",
        d: "<img src=\"./images/image4.png\"\ width=120/>"
      },
      correctAnswer: "a"
    },
  {
    question: " In the term ortho-graphic, ‘orthos’ means images",
    answers: {
      a: "drawing",
      b: "projection",
      c: "straight",
      d: "view"
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
