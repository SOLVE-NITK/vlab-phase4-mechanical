
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
      question: "Gears impose _____ load on shaft",
      answers: {
        a: "Tangential load",
        b: "Radial load>",
        c: "both a and b",
        d: " none of these"
      },
      correctAnswer: "c"
    },
    {
      question: "In power transmission equation, ",
      answers: {
        a: " P is in kw and M<sub>t</sub> is the maximum torque",
        b: "P is in NM/sec and M<sub>t</sub> is the maximum torque",
        c: "P is in Nm/sec and M<sub>t</sub> is mean torque",
        d: "P is in kw and M<sub>t</sub> is mean torque"
      },
      correctAnswer: "a"
    },
    {
      question: "When the shaft is subjected to pure torsional moment, the torsional stress is given by?",
      answers: {
        a: "32M<sub>t</sub>/πd<sup>3</sup>",
        b: "16M<sub>t</sub>/πd<sup>3</sup>",
        c: "8M<sub>t</sub>/πd<sup>3</sup>",
        d: "All of the above"
      },
      correctAnswer: "d"
    },
    {
      question: " According to A.S.M.E standard if a material has a yield strength of 200 N/mm<sup>2</sup>, then the maximum allowable shear stress is",
      answers: {
        a: "60 N/mm<sup>2</sup>",
        b: "36 N/mm<sup>2</sup>",
        c: "65 N/mm<sup>2</sup>",
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
