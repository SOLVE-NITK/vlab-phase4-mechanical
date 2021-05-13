
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
      question: "A model of casting, constructed to use for forming a mould in damp sand, is called as",
      answers: {

a: " sand construction",
b: " pattern",
c: " cover",
d: " none of the above",

      },
      correctAnswer: "b"
    },
    {
      question: "The patterns which are made in two or more pieces are called as",
      answers: {
        a: " solid patters",
        b: " split patterns",
        c: " loose piece patterns",
        d: " none of the above",

      },
      correctAnswer: "b"
    },
    {
      question: "Which of the following sentences is/are correct for casting process?",
      answers: {
        a: " Casting process is comparatively costly",
        b: " Objects of larges sizes cannot be produced easily by casting process",
        c: " The time required for the process of making casting is quite long",
        d: " All of the above sentences are correct",

      },
      correctAnswer: "c"
    },
    {
      question: "The productivity of casting process is comparatively",
      answers: {
        a: " lower than the productivity of other automatic processes like rolling",
        b: " higher than the productivity of other automatic processes like rolling",
        c: " similar to the productivity of other automatic processes like rolling",
        d: " unpredictable",

      },
      correctAnswer: "a"
    },
    {
      question: "Blow holes in casting are caused by",
      answers: {
        a: " excessive moisture",
        b: " low permeability",
        c: " excessive fine grains",
        d: " all of the above",

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
