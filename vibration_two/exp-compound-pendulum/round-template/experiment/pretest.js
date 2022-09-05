
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
        question: "Double pendulum consists of:",
      answers: {
        "a": "two-point masses suspended by two strings",
        "b": "three-point masses suspended by two strings",
        "c": "two-point masses suspended by three strings",
        "d": "three-point masses suspended by three strings"
        },
        correctAnswer: "a"
      },
      {
        question: "In order to double the period of a simple pendulum, the length of the string should be",
        answers: {
          "a": "halved",
          "b": "doubled",
          "c": "quadrupled",
          "d": "none of the mentioned"
        },
        correctAnswer: "c"
      },
      {
        question: "The guess solution regarding the solutions for x1 and x2 in double pendulum are:",
        answers: {
          "a": "x<sub>1</sub> = X<sub>1</sub> sin &omega;t ; x<sub>1</sub> = X<sub>1</sub> sin &omega;t",
          "b": "&theta;<sub>1</sub> = &beta;<sub>1</sub> sin &omega;t ; &theta;<sub>2</sub> = &beta;<sub>2</sub> sin &omega;t",
          "c": "x = A<sub>1</sub> e<sup>st</sup> ; x = A<sub>2</sub> e<sup>st</sup>",
          "d": "x = X sin &omega;t ; &theta; = &beta; sin &omega;t "
        },
        correctAnswer: "a"
      },
      {
        question:  "The Legrangian equation is L=T-V where V is",
        answers: {
          "a": "kinetic energy of system",
          "b": "potential energy of system",
          "c": "vibrational energy of system",
          "d": "none of the above"
        },
        correctAnswer: "b"
      },
      {
        question: "can't calculate",
      answers: {
        "a": "Increased",
        "b": "Decreased",
        "c": "Will not be affected",
        "d": "can't calculate"
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
  