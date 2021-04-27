
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
      question: "Centre distance between two gears depends upon",
      answers: {
        a: "Diameters of the two gears",
        b: "Module of the gear",
        c: "Number of teeth of the gear",
        d: "All of the above"
      },
      correctAnswer: "d"
    },

    {
      question: "For two mating gears ",
      answers: {
        a: "The module of first gear must be greater than second gear",
        b: "The module of the second gear must be greater than first gear",
        c: "Module must be same for two gears",
        d: "Module doesn’t affect their mating"
      },
      correctAnswer: "c"
    },

    {
      question: "If the driving gear has a speed of 220 rpm and number of teeth on the driving and driven gear are 30 and 110 respectively, then speed of the driven gear will be",
      answers: {
        a: "60 RPM",
        b: "66 RPM ",
        c: "600 RPM",
        d: "660 RPM"
      },
      correctAnswer: "a"
    },
    {
      question: "If the module of the gear is 3mm and diameter of the gear is 18mm then determine the number of teeth on the gear?",
      answers: {
        a: "6 teeth",
        b: "9 teeth",
        c: "5 teeth",
        d: "12 teeth"
      },
      correctAnswer: "a"
    },
    {
      question: "If the centre distance between two gear is 20mm and teeth on driver and driven gears are 12 and 4 respectively, determine the module of the gear?",
      answers: {
        a: "3.5 mm",
        b: "25 mm",
        c: "2.5 mm",
        d: "2 mm"
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
