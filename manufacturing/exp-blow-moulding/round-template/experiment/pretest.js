
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
    question: "In blow moulding, to inflate soft plastic, which medium is used?",
    answers: {
      a: "Air",
      b: "Water",
      c: "Oil",
      d: "Alcohol",
},
    correctAnswer: "a"
  },

  {
    question: "Which of the following plastics is not used in blow moulding",
    answers: {
      a: "Terephthalate",
      b: "Polypropelene",
      c: "Polythene",
      d: "PVC"
    },
    correctAnswer: "a"
  },

  {
    question: " Which of the following is not a type of blow moulding process?",
    answers: {
      a: "350 kPa",
      b: "400 kPa ",
      c: "450 kPa",
      d: "500 kPa",
    },
    correctAnswer: "b"
  },
  
  {
    question: "Which of the following is not a type of blow moulding process?",
    answers: {
      a: "Injection blow moulding",
      b:"Extrusion blow moulding",
      c: "Multi-smaller  blow moulding",
      d: "IMulti-larger  moulding",
    },
    correctAnswer: "c"
  }
  {
    question: "Which of the following is not an application of blow moulding process?",
    answers: {
      a: "Toy bodies",
      b: "Door liners",
      c: "Bottles",
      d: "pipes"
    },
    correctAnswer: "b"
  },
];





// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
