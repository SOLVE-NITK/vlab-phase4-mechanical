
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
      question: "Which of the following is not true about friction welding?",
      answers: {
        a: "Dissimilar metals cannot be joined",
        b: "This technique is relatively faster as compared to the other techniques",
        c: "This technique is suitable for any parts of shape or size",
        d: "Sheared surfaces can also be joined by the process"
      },
      correctAnswer: "a"
    },
    {
      question: "Resistance spot welding typically employs electrical power in the form of",
      answers: {
        a: "direct current",
        b: "round bars",
        c: "medium frequency half-wave direct current",
        d: "all of the above"
      },
      correctAnswer: "d"
    },
    {
      question: "Friction welding process is restricted to_____",
      answers: {
        a: "square bars",
        b: "round bars",
        c: "hexagonal bars",
        d: "bars having diameters less than 20mm"
      },
      correctAnswer: "b"
    },
    {
      question: " Resistance welding is widely used for",
      answers: {
        a: "manufacture of steel pipe",
        b: "assembly of bodies for automobiles",
        c: " both (a) and (b)",
        d: "none of the above"
      },
      correctAnswer: "c"
    },
    {
      question: "Which one of the following is a solid-state joining process?",
      answers: {
        a: "Arc Welding",
        b: "Resistance spot welding",
        c: "Friction Welding",
        d: "TIG welding"
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
