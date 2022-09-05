
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
        question: "If m<sub>1</sub>= 22 kg, m<sub>2</sub>= 18 kg, k<sub>1</sub>= 7 N/m, k<sub>2</sub>=11 N/m, k<sub>3</sub>=0 N/m. Then the natural frequencies are:",
        answers: {
          "a": "0.3902 rad/s, 0.2304 rad/s",
          "b": "0.3458 rad/s, 0.5567 rad/s",
          "c": "0.5672 rad/s, 1.1301 rad/s",
          "d": "0.3902 rad/s, 1.1301 rad/s"
        },
        correctAnswer: "d"
      },
      {
        question: "If m<sub>1</sub>= 22 kg, m<sub>2</sub>= 18 kg, k<sub>1</sub>= 7 N/m, k<sub>2</sub>=11 N/m, k<sub>3</sub>=0 N/m. Then the first and second mode shapes respectively are:",
        answers: {
          "a": "0.7533, 1.5490",
          "b": "0.7508, -1.0897",
          "c": "-1.0897, 0.7508",
          "d": "1.5490, 0.7533"
      },
        correctAnswer: "b"
      },
      {
        question:"If m<sub>1</sub>= m<sub>2</sub>=20 kg and k<sub>1</sub>= k<sub>2</sub>=15 N/m, then the natural frequencies of vibrations are:",
        answers: {
          "a": "0.5342, 1.2034",
          "b": "0.6745, 2.3423",
          "c": "0.5352, 1.4345",
          "d": "None of the above"
        },
        correctAnswer: "d"
      },
      {
        question: "If m<sub>1</sub>= m<sub>2</sub>=20 kg, k<sub>1</sub>= k<sub>2</sub>=15 N/m and initial excitation x<sub>1</sub>=2 m and x<sub>2</sub>=9 m. Then the equation of motion of m<sub>1</sub> is:",
        answers: {
          "a": "4.5777 cos (0.5352t) - 2.5777 cos (1.4013t)",
          "b": "-2.5777 cos (0.5352t) +1.5931 cos (1.4013t)",
          "c": "-2.5777 cos (0.5352t) +7.4068 cos (1.4013t)",
          "d": "4.5777 cos (0.5352t) +1.5931 cos (1.4013t) "
        },
        correctAnswer: "a"
      },
      {
        question: "If m<sub>1</sub>= m<sub>2</sub>=20 kg, k<sub>1</sub>= k<sub>2</sub>=15 N/m and initial excitation x<sub>1</sub>=2 m and x<sub>1</sub>=9 m. Then the equation of motion of m<sub>2</sub> is:",
        answers: {
          "a": "4.5777 cos (0.5352t) +7.4068 cos (1.4013t)",
          "b": "-2.5777 cos (0.5352t) +7.4068 cos (1.4013t)",
          "c": "7.4069 cos (0.5352t) +1.5931 cos (1.4013t)",
          "d": "4.5777 cos (0.5352t) +1.5931 cos (1.4013t) "
        },
        correctAnswer: "c"
      }
    ];
  
  
  
  
  // ---------------------------- End -------------------------------
  
  
  
  
  
  
  
  
    // display quiz right away
    buildQuiz();
  
    // on submit, show results
    submitButton.addEventListener("click", showResults);
  })();
  