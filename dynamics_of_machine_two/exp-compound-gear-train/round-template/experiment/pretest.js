
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
      question: "Which among the following is false for the gear?",
      answers: {
        a: "Gear is a toothed wheel ",
        b: "Gear is used to transmit power at a constant angular velocity ratio",
        c: "Gear is a wheel which rotates but doesn’t transmit power ",
        d: "Gear may be internal meshing type or external meshing type "
      },
      correctAnswer: "b"
    },

    {
      question: "What is compound gear train?",
      answers: {
        a: "It is a gear train in which each gear is placed on one shaft",
        b: "It is a gear train in which at-least two gears are placed on a single shaft within the gear train"
      },
      correctAnswer: "b"
    },

    {
      question: "Which gear train is used when large changes in speed or power output are needed and there is only a small space between the input and output shafts?",
      answers: {
        a: "Compound gear train",
        b: "Simple gear train",
        c: "Both a and b",
        d: "None of the above"
      },
      correctAnswer: "a"
    },
    {
        question: "What is module of the gear?",
        answers: {
          a: "It is the ratio of the number of teeth to the diameter of the gear",
          b: "It is the ratio of diameter to the two times number of teeth of the gear",
          c: "It is the ratio of two times number of teeth to the diameter of the gear",
          d: "It is the ratio of diameter of the gear to the number of teeth"
        },
        correctAnswer: "d"
      },
    {
        question: "How to increase the diameter of the gear when the module is constant?",
    answers: {
          a: "By decreasing the number of teeth on the gear ",
          b: "By increasing the number of teeth on the gear",
          c: "Both a and b",
          d: "None of the above"
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
