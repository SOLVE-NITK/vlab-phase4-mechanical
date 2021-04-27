
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
    question: "The natural frequency in two pulley system case is proportional to",
    answers: {
      a: "m<sup>0.5</sup>",
      b: "m",
      c: "m<sup>-0.5</sup>",
      d: "None of the above"
    },
    correctAnswer: "c"
  },

  {
    question: "Calculate natural frequency of the two pulley system. Consider the following data:<ol><li>Mass of block = 2 kg</li><li>k1 =160 N/m</li><li>k2 =260 N/m</li></ol>",
    answers: {
      a: "3.02 rad/s",
      b: "3.52 rad/s",
      c: "2.49 rad/s",
      d: "3.46 rad/s"
    },
    correctAnswer: "b"
  },

  {
    question: "Determine natural frequency of a system, which has equivalent spring stiffness of 30000 N/m and mass of 20 kg?",
    answers: {
      a: "12.32 Hz",
      b: "4.10 Hz",
      c: "6.16 Hz",
      d: "None of the above"
    },
    correctAnswer: "c"
  },
  {
    question: "The 2 pulley system is equivalent to a 1DOF system whose equivalent spring constant is ……………………",
    answers: {
      a: "(k1*k2)/(4(k1+k2))",
      b: "(k1-k2)/(4(k1+k2))",
      c: "(k1*k2)/(4(k1-k2))",
      d: "(k1+k2)/(4(k1+k2))"
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
