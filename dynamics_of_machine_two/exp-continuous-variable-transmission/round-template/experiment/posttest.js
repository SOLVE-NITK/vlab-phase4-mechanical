
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
      question: "Use of gear ratio is to provide required amount of torque/rpm required for constant power input",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "Gear ratio > 1 reduces the output RPM, hence reducing the output power",
      answers: {
        a: "False",
        b: "True"
      },
      correctAnswer: "a"
    },
    {
      question: "For a gear ratio > 1, the following is true",
      answers: {
        a: "RPM of driving is higher",
        b: "RPM of driven is higher",
        c: "it doesn’t depend on driving/driven RPM",
        d: "it depends only on belt material"
      },
      correctAnswer: "a"
    },
    {
      question: "Gear ratio in terms of driving and driven pulleys refers to",
      answers: {
        a: "RPM of driving pulley/ RPM of driven pulley",
        b: "RPM of driven pulley/ RPM of driving pulley",
        c: "Radius of driving pulley/ Radius of driven pulley",
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
