
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
      question: "What are the normal mode oscillations of a coupled pendulum system?",
      answers: {
        a: "1",
        b: "2",
        c: "3",
        d: "0"
      },
      correctAnswer: "b"
    },

    {
      question: "Effect of change in mass for In-phase mode in coupled pendulum is ",
      answers: {
        a: "Directly proportional",
        b: "Indirectly proportional",
        c: "No effect",
        d: "Both a and b"
      },
      correctAnswer: "c"
    },

    {
      question: "What is the condition to make the reconfigurable coupled pendulum to resonate?",
      answers: {
        a: "One pendulum is kept stationary and the other is displaced ",
        b: "Both are displaced in the same direction ",
        c: "Both are displaced in opposite directions",
        d: "Resonance is not possible "
      },
      correctAnswer: "a"
    },
    {
        question: "The angle of displacement for one pendulum is 60&deg;  whereas the displacement for another pendulum is 0&deg;. Which mode will the pendulum follow?",
        answers: {
          a: "In-phase mode ",
          b: "Out-of phase mode ",
          c: "Resonance",
          d: "No phase"
        },
        correctAnswer: "c"
      },
    {
        question: "The angle of displacement for one pendulum is 60&deg; whereas the displacement for another pendulum is 60&deg;. Which mode will the pendulum follow?",
    answers: {
          a: "In-phase mode ",
          b: "Out-of phase mode ",
          c: "Resonance",
          d: "No phase"
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
