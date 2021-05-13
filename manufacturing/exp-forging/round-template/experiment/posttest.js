
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
      question: "Shaping of metal by squeezing them in between two or more dies in order to obtain the desire shape is done by?",
      answers: {
        a: "Forming",
        b: "Forging",
        c: "Welding",
        d: "Grinding"
      },
      correctAnswer: "b"
    },
    {
      question: " Forging is carried out at which temperature?",
      answers: {
        a: "Below recrystallization temperature",
        b: "Above recrystallization temperature",
        c: "Below or above the recrystallization temperature",
        d: "Above melting point"
      },
      correctAnswer: "c"
    },
    {
      question: "In which of the following forging process poor material utilization occurs?",
      answers: {
        a: "Open die",
        b: " Closed die",
        c: "Impression die",
        d: "Hold die"
      },
      correctAnswer: "a"
    },
    {
      question: "Which type of forging is done by deforming the metal at room temperature?",
      answers: {
        a: "Open die forging",
        b: "Cold forging",
        c: "Hot forging ",
        d: "All of the above"
      },
      correctAnswer: "b"
    },
    {
      question: "The height of the final product after the forging process will be:",
      answers: {
        a: "Less than that of the original workpiece",
        b: "Greater than that of the original workpiece",
        c: "Same that of the original workpiece",
        d: "unpredictable"
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
