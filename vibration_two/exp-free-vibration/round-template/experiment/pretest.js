
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
        question: "Systems that require two independent coordinates to describe their motion are called:",
        answers: {
          "a": "single DOF",
          "b": "two DOF",
          "c": "Multiple DOF",
          "d": "None of the above"
        },
        correctAnswer: "b"
      },
      {
        question: "For the two DOF free vibration without damping:",
        answers: {
          "a": "the masses are excited by harmonic force F(t)",
          "b": "the masses are excited by impulse excitation",
          "c": "the masses are excited by initial excitation",
          "d": "none of the above"
        },
        correctAnswer: "c"
      },
      {
        question: "Under certain condition, any point in the system may execute harmonic vibrations at any of the two natural frequencies, and these are known as:",
        answers: {
          "a": "principal mode of vibrations",
          "b": "star mode of vibrations",
          "c": "Secondary mode of vibrations",
          "d": "Tertiary mode of vibrations"
        },
        correctAnswer: "a"
      },
      {
        question:  "A system having two degrees of freedom can vibrate in:",
        answers: {
          "a": "one principal modes of vibrations",
          "b": "two principal modes of vibrations",
          "c": "three principal modes of vibrations",
          "d": "multiple principal modes of vibrations"
        },
        correctAnswer: "b"
      },
      {
        question: "The guess solution regarding the solutions for x1 and x2 in 2 DOF free vibrations are:",
        answers: {
          "a": "x<sub>1</sub> = X<sub>1</sub> sin &omega;t ; x<sub>2</sub> = X<sub>2</sub> sin &omega;t",
          "b": "&theta;<sub>1</sub> = &beta;<sub>1</sub> sin &omega;t ; &theta;<sub>2</sub> = &beta;<sub>2</sub> sin &omega;t",
          "c": " x<sub>1</sub> = A<sub>1</sub> e<sup>st</sup> ; x<sub>2</sub> = A<sub>2</sub> e<sup>st</sup> ",
          "d": "x = X sin &omega;t ; &theta; = &beta; sin &omega;t"
      },
        correctAnswer: "a"
      },
    ];
  
  
  
  
  // ---------------------------- End -------------------------------
  
  
  
  
  
  
  
  
    // display quiz right away
    buildQuiz();
  
    // on submit, show results
    submitButton.addEventListener("click", showResults);
  })();
  