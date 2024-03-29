
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
      question: "1.	Select the odd one out of these",
      answers: {
        a: "Nylon",
        b: "PVC",
        c: "PTFE",
        d: "Polyester"
      },
      correctAnswer: "d"
    },
    {
      question: "What is the minimum temperature allowed to be given to the injection molding process?",
      answers: {
        a: "S120°C",
        b: "130°C",
        c: "150°C",
        d: "190"
      },
      correctAnswer: "c"
    },
    {
      question: "  Where does the granular moulding material get loaded into?",
      answers: {
        a: "barrel",
        b: "hopper",
        c: "pellets",
        d: "split"
      },
      correctAnswer: "b"
    },
    {
      question: "Injection moulding is character of thermosetting plastic (Say True or False)",
      answers: {
        a: "Frue",
        b: "False",

      },
      correctAnswer: "b"
    },
    {
      question: "There is a varied pressure provided in the solidification unit of injection molding process. (Say True or False).",
      answers: {
        a: "Frue",
        b: "False",

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
