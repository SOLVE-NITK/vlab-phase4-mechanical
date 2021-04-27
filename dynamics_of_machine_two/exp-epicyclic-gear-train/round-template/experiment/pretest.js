
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
      question: "The circular pitch of a gear is given by the formula. <br (Where, d = diameter of pitch circle, t = number of teeth)",
      answers: {
        a: "&pi;d/t",
        b: "&pi;d/2t",
        c: "2&pi;d/t",
        d: "&pi;d/3t"
      },
      correctAnswer: "a"
    },

    {
      question: "The module of a gear is given by the formula.<br> (Where, d = diameter of pitch circle, t = number of teeth)",
      answers: {
        a: "2d/t",
        b: "d/t",
        c: "d/2t",
        d: "d/3t"
      },
      correctAnswer: "b"
    },

    {
      question: "Two or more gears that are meshed together are called a _____.",
      answers: {
        a: "Gear line",
        b: "Gear string",
        c: "Gear ratio",
        d: "Gear train"
      },
      correctAnswer: "d"
    },
    {
        question: "The number of times one gear rotates in relation to another is called a _____.",
        answers: {
          a: "Gear revolution",
          b: "Gear partnership",
          c: "Gear ratio",
          d: "Gear relationship"
        },
        correctAnswer: "c"
      },
    {
        question: "How to increase the diameter of the gear when the module is constant?",
    answers: {
          a: "&omega;<sub>2</sub> &div; &omega;<sub>2</sub>",
          b: "1 + ( R<sub>r</sub> &div; R<sub>s</sub> )",
          c: "D<sub>1</sub> &div; D<sub>2</sub>",
          d: "T<sub>1</sub> &div; T<sub>2</sub>"
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
