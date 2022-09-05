
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
        question: "If the length of both strings gets reduced evenly for same point masses of different initial angles. Then the natural frequencies will:",
        answers: {
          a: "Increased",
          b: "Decreased",
          c: "Will not be affected",
          d: "can't calculate"
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
      {
        question: "If l<sub>1</sub> = 100m; l<sub>2</sub> = 80m; m<sub>1</sub> = m<sub>2</sub> = 35kg; θ<sub>1</sub> =30<sup>o</sup> and θ<sub>2</sub> = 40<sup>o</sup> , Then the natural frequencies of system are:",
        answers: {
          "a": "0.040139 Hz and 0.097769 Hz",
          "b": "0.089932 Hz and 0.097769 Hz",
          "c": "0.040139 Hz and 0.050432 Hz",
          "d": "0.057683 Hz and 0.067893 Hz"
        },
        correctAnswer: "a"
      },
      {
        question: "If l<sub>1</sub> = 100m; l<sub>2</sub> = 80m; m<sub>1</sub> = m<sub>2</sub> = 35kg; θ<sub>1</sub> =30<sup>o</sup> and θ<sub>2</sub> = 40<sup>o</sup>, Then the first mode shape and second mode shape ratio respectively are:",
        answers: {
          "a": "0.4860 and -2.4430",
          "b": "0.6733 and -2.0806",
          "c": "0.4806 and -2.0806",
          "d": "none of the above"
        },
        correctAnswer: "c"
      },
      {
        question: "If l<sub>1</sub> = l<sub>2</sub> =80m; m<sub>1</sub> = m<sub>2</sub> = 40kg; θ<sub>1</sub> = θ<sub>2</sub> = 40<sup>o</sup>, Then the first mode shape and second mode shape ratio respectively are:",
        answers: {
          "a": "0.4142 and -2.4142",
          "b": "0.4142 and -2.7793",
          "c": "0.4142 and -2.4242",
          "d": "0.4234 and -1.5324"
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
  