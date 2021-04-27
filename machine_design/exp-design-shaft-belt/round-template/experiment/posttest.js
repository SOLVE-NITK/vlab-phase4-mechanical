
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
      question: "If yielding strength=400N/mm, the find then permissible shear stress according to ASME standards.",
      answers: {
        a: "72 N/mm<sup>2</sup>",
        b: "76 N/mm<sup>2</sup>",
        c: "268 N/mm<sup>2</sup>",
        d: "422 N/mm<sup>2</sup> "
      },
      correctAnswer: "a"
    },
    {
      question: "According to A.S.M.E code what is the allowable shear stress for a shaft without key way effect, which has ultimate tensile strength and yield strength of 300 N/mm2 and 150 N/mm2 respectively. ",
      answers: {
        a: "45 N/mm<sup>2</sup>",
        b: "254 N/mm<sup>2</sup>",
        c: "240.5 N/mm<sup>2</sup>",
        d: "50 N/mm<sup>2</sup>"
      },
      correctAnswer: "a"
    },
    {
      question: "Two shaft will have equal strenght if,",
      answers: {
        a: "Diameter of both the shafts is same",
        b: "Angle of twist of both the shafts is same",
        c: "Material of both the shafts is same",
        d: "Twisting moment of both the shafts is same"
      },
      correctAnswer: "d"
    },
    {
      question: "When the shaft is subjected to pure bending moment, the bending stress is given by?",
      answers: {
        a: "32M/πd<sup>3</sup>",
        b: "16M/πd<sup>3</sup>",
        c: "8M/πd<sup>3</sup>",
        d: "All of the above"
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
