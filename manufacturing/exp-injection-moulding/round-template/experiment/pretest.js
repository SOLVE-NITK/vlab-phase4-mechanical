
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
    question: "How is the die used in injection molding cooled?",
    answers: {
      a: " Oil",
      b: "Air",
      c: "Water",
      d:"Contact with cold surface",
      
},
    correctAnswer: "c"
  },

  {
    question: "Which of the following material is not made by injection molding?",
    answers: {
      a:"Nuts",
      b:"Tubes",
      c:"Car handles",
      d:"Electrical fittings",
      
    },
    correctAnswer: "b"
  },
  {
    question: "Which of the following is not a type of blow moulding process?",
    answers: {
      a:"Inner pressure of material" ,
      b:"Outer pressure of material",
      c:"Volume of material",
      d:"Temperature of material",
      
    },
    correctAnswer: "c"
  },
  {
    question: " Components from injection moulding process are made very expensive compared to other methods due to the application of very costly equipment.",
    answers: {
      a:"True",
      b:"False",
      
    },
    correctAnswer: "b"
  },
  

  {
    question: "The flow of plastic in the mould cavity is more proper and smooth if the thickness of the component made is very small.?",
    answers: {
      a:"True",
      b:"False",
      
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
