
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
      question: "Brazing is the process of",
      answers: {
        a: "Joining plastic sheets",
        b: "Hard soldering using brass spelter",
        c: "Casing in brass",
        d: "Making steel look like brass"
      },
      correctAnswer: "b"
    },
    {
      question: " The temperature range of the brazing process is",
      answers: {
        a: "150°C to 250°C",
        b: "250°C to 450°C",
        c: "500°C to 700°C",
        d: "700°C to 900°C"
      },
      correctAnswer: "d"
    },
    {
      question: "The flux is brazing process is used in the form of",
      answers: {
        a: "Powder",
        b: "Liquid",
        c: "Paste",
        d: "Any of the above"
      },
      correctAnswer: "d"
    },
    {
      question: "A braze joint may be satisfactorily used on components made of",
      answers: {
        a: "Tinplate",
        b: "Brass",
        c: "Copper",
        d: "Aluminium"
      },
      correctAnswer: "c"
    },
    {
      question: "In brazing, the filler metal has a lower melting point than the adjoining metal but in welding, the filler metal has a higher melting point, like soldering. True or False",
      answers: {
        a: "True",
        b: "False"
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
