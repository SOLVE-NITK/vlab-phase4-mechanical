
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
      question: "“Ericsson cycle is difficult to achieve in practice because it involves heat transfer through a differential temperature difference in all components including the regenerator”. Indicate whether this statement is",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "The Ericsson cycle consists of",
      answers: {
        a: "Two isothermal and two constant pressure processes",
        b: "Two isentropic and two constant pressure processes",
        c: "One isothermal, one isentropic and two constant pressure processes",
        d: "None of the above"
      },
      correctAnswer: "a"
    },
    {
      question: "In an Ericsson cycle, heat addition and rejection does not take place at constant temperature.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "b"
    },
    {
      question: "In an Ericsson cycle, expansion and compression take place at",
      answers: {
        a: "Constant pressure",
        b: "Constant temperature",
        c: "All of the above",
        d: "None of the above"
      },
      correctAnswer: "c"
    },
    {
      question: "Given that an Ericsson cycle is operating between the temperature limits of 1200K and 300K, what is its efficiency?",
      answers: {
        a: "0.57",
        b: "0.75",
        c: "3",
        d: "None of the above"
      },
      correctAnswer: "b"
    },
    {
      question: "For ideal Ericsson cycle, given: P1=3 kPa, P3=8 kPa, v1=9 m<sup>3</sup>/kg, v3=7 m<sup>3</sup>/kg. Calculate P2, P4, v2, v4",
      answers: {
        a: "P2= 8 kPa, P4=3 kPa, v2=3.38 m<sup>3</sup>/kg, v4=18.67 m<sup>3</sup>/kg",
        b: "P2= 3 kPa, P4=8 kPa, v2=7 m<sup>3</sup>/kg, v4=9 m<sup>3</sup>/kg",
        c: "P2= 12.25 kPa, P4=10.70 kPa, v2=9.45 m<sup>3</sup>/kg, v4=6.78 m<sup>3</sup>/kg",
        d: "None of the above"
      },
      correctAnswer: "a"
    },
    {
      question: "For ideal Ericsson cycle, given: P1=3 kPa, P3=8 kPa, v1=9 m<sup>3</sup>/kg, v3=7 m<sup>3</sup>/kg. Calculate Qin (heat added), Qout (heat rejected) and Wnet (Net work).",
      answers: {
        a: "Qin = 26.48 kJ/kg, Qout =54.93 kJ/kg, Wnet =26.48 kJ/kg",
        b: "Qin = 28.44 kJ/kg, Qout =54.93 kJ/kg, Wnet =26.48 kJ/kg",
        c: "Qin = 54.93 kJ/kg, Qout =26.48 kJ/kg, Wnet =28.44 kJ/kg",
        d: "None of the above"
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
