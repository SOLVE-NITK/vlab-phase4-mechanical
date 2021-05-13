
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
      question: "If the isometric projection of an object is drawn with true length the shape would be the same and the size is how much larger than the actual isometric projection?",
      answers: {
        a: "25%",
        b: "29.5%",
        c: "22.5%",
        d: "33.3%"
      },
      correctAnswer: "c"
    },
    {
      question: " an isometric projection is drawn with true measurements but not with isometric scale then drawing are called",
      answers: {
        a: "Isometric projection",
        b: "Isometric view",
        c: "orthographic view",
        d: "Isometric perception"
      },
      correctAnswer: "b"
    },
    {
      question: "If isometric drawing is made use of isometric scale then drawing is called",
      answers: {
        a: "Isometric projection",
        b: "Isometric view",
        c: "orthographic view",
        d: "Isometric perception"
      },
      correctAnswer: "a"
    },
    {
      question: "Identify the front view of the give projection.'<br> <img src=\"./images/image6.png\"\ width=200/>'",
      answers: {
       	a: "<img src=\"./images/image11.png\"\ width=100/>",
        b: "<img src=\"./images/image5.png\"\ width=100/>",
        c: "L<img src=\"./images/image18.png\"\ width=100/>",
        d: "<img src=\"./images/image12.png\"\ width=100/>"
      },
      correctAnswer: "a"
    },
    {
       question: "Identify the front view of the give projection. '<br> <img src=\"./images/image3.png\"\ width=200/>'",
      answers: {
        a: "<img src=\"./images/image4.png\"\ width=100/>",
        b: "<img src=\"./images/image20.png\"\ width=100/>",
        c: "L<img src=\"./images/image17.png\"\ width=100/>",
        d: "<img src=\"./images/image18.png\"\ width=100/>"
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
