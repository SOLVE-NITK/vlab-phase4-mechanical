
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
      question: "The value of natural frequency in the 2 pulley system for the following data.<ol><li>Mass of block = 1.5 kg</li><li>k1 =260 N/m</li><li>k2 =360 N/m</li></ol>",
      answers: {
        a: "5.02 rad/s",
        b: "4.02 rad/s",
        c: "5.22 rad/s",
        d: "5.72 rad/s"
      },
      correctAnswer: "a"
    },
    {
      question: "The value of natural frequency in the 2 pulley system for the following data.<ol><li>Mass of block = 1 kg</li><li>k1 =160 N/m</li><li>k2 =360 N/m</li></ol>",
      answers: {
        a: "5.06 rad/s",
        b: "3.45 rad/s",
        c: "5.26 rad/s",
        d: "2.89 rad/s"
      },
      correctAnswer: "c"
    },
    {
      question: "The value of equivalent spring constant in the 2 pulley system for the following data.<ol><li>k1 =185 N/m</li><li>k2 =256 N/m</li></ol>",
      answers: {
        a: "26.8 N/m",
        b: "25.4 N/m",
        c: "21.3 N/m",
        d: "26.8 N/m"
      },
      correctAnswer: "d"
    },
    {
      question: "The value of equivalent spring constant in the 2 pulley system for the following data.<ol><li>k1 =140 N/m</li><li>k2 =300 N/m</li></ol>",
      answers: {
        a: "20.2 N/m",
        b: "22.6 N/m",
        c: "25.3 N/m",
        d: "28.25 N/m"
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
