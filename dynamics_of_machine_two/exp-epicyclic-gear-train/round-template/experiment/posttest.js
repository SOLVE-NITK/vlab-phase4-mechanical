
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
      question: "When the axes of the shafts, over which the gears are mounted, move relative to a fixed axis, then the train is known as epicyclic gear train.",
      answers: {
        a: "False",
        b: "True"
      },
      correctAnswer: "b"
    },

    {
      question: "The radial distance of a tooth from the pitch circle to the bottom of the tooth is called ",
      answers: {
        a: "Clearance",
        b: "Addendum",
        c: "Dedendum",
        d: "Working depth"
      },
      correctAnswer: "c"
    },

    {
      question: "What will be speed of carrier when the speed of sun gear is 1500rpm; speed of planet gear is 500rpm. Number of teeth on sun gear are 25 and planet gear are 75.",
      answers: {
        a: "1000 rpm",
        b: "520 rpm",
        c: "750 rpm",
        d: "680 rpm"
      },
      correctAnswer: "c"
    },
    {
      question: "The circular pitch of a toothed wheel with 50 teeth and a module of 6 mm is",
      answers: {
        a: "1.35 mm",
        b: "18.85 mm",
        c: "6.67 mm",
        d: "12.56 mm"
      },
      correctAnswer: "b"
    },
    {
      question: "If the centre distance between two gear is 20mm and teeth on driver and driven gears are 12 and 4 respectively, determine the module of the gear?",
      answers: {
        a: "420",
        b: "240",
        c: "200",
        d: "120"
      },
      correctAnswer: "d"
    }
  ];

// ---------------------------- End -------------------------------

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
