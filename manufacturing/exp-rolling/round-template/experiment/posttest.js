
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
      question: "There is no slipping between roller and workpiece.",
      answers: {
        a: "True",
        b: " False",
      },
      correctAnswer: "a"
    },
    {
      question: " During rolling process, the thickness of workpiece squeezed is called what?",
      answers: {
        a: " Shaft",
        b: "Bore",
        c: "Draft",
        d: "Core"
      },
      correctAnswer: "c"
    },
    {
      question: "When a metal is entering, how are the width and the length of the workpiece related to each other?",
      answers: {
        a: "Direct relation",
        b: "Inverse relation",
        c: "Exponential relation",
        d: "No relation"
      },
      correctAnswer: "b"
    },
    {
      question: "How would the draft be affected if the radius of the roller is decreased?",
      answers: {
        a: "Increase",
        b: "Decrease",
        c: " Won’t change",
        d: "Not related"
      },
      correctAnswer: "b"
    },
    {
      question: "The thickness of the steel plate after the rolling process will be:",
      answers: {
        a: "Less than that of the original plate",
        b: "Greater than that of the original plate",
        c: "Same that of the original plate",
        d: "  unpredictable "
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
