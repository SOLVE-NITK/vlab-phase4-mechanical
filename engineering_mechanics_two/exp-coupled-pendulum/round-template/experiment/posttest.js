
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
      question: "The natural angular frequency of a coupled pendulum in In-phase mode having mass of the bobs as 2.5kg, lengths of the string equal to 62 cm and having stiffness of the spring equal to 15 N/m is ?",
      answers: {
        a: "3.78 rad/s",
        b: "3.56 rad/s",
        c: "4.12 rad/s",
        d: "3.97 rad/s"
      },
      correctAnswer: "d"
    },

    {
      question: "The angle displaced by a coupled pendulum in Out-of phase mode having both the masses 1kg, lengths equal to 50cm and having stiffness of the spring as 50 N/m. Taking amplitude as 0.4 m and time ‘t’ as 10 sec is?",
      answers: {
        a: "10.5 degrees",
        b: "-18.16 degrees",
        c: "7.57 degrees",
        d: "-10.5 degrees"
      },
      correctAnswer: "b"
    },

    {
      question: "The natural angular frequency of a coupled pendulum in Out-of phase mode having mass of the bobs as 4kg, lengths of the string equal to 55 cm and having stiffness of the spring equal to 45 N/m is ?",
      answers: {
        a: "18.5 rad/s",
        b: "6.35 rad/s",
        c: "12.22 rad/s",
        d: "30.4 rad/s"
      },
      correctAnswer: "b"
    },
    {
      question: "Calculate displacement of both pendulums for the values of length 63 cm, mass 78Kg and stiffness 100 N/m, amplitude=0.5m, t=20s, phase difference=0 and mode to be in phase.",
      answers: {
        a: "X=-0.4641; Y=0.4641",
        b: "X=-0.2353; Y=0.4641",
        c: "X=-0.5173; Y=0.6120",
        d: "X=0.6330; Y=0.9543"
      },
      correctAnswer: "a"
    },
    {
      question: "Calculate frequency of the pendulums for the values of length 54 cm. take Amplitude=0.5m, t=20s, phase difference=0 and mode to be in phase. ",
      answers: {
        a: "0.23 Hz",
        b: "0.71 Hz",
        c: "0.67 Hz",
        d: "0.89 Hz"
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
