
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
      question: "A student wants to find the absolute pressure of water at a point below the surface of water. He has a barometer and a manometer pressure gauge. The barometer reads 1.3152 bar where as the manometer pressure gauge reads 0.3152 bar. What is the absolute pressure? (assume that pressure at one end of the manometer is atmospheric).",
      answers: {
        a: "1 bar",
        b: "1.6304 bar",
        c: "0.3152 bar",
        d: "1.3152 bar"
      },
      correctAnswer: "b"
    },
    {
      question: "In a U-tube, one end is available to the atmosphere, the opposite end appended to a pressurized gas of check weight 40 kPa. The height of the liquid segment in the atmospheric side is 60 cm, and that on the gas side is 30 cm. The manometric liquid utilized is: (Take g = 9.8 m/s2).",
      answers: {
        a: "Water",
        b: "Liquid ammonia",
        c: "Oil",
        d: "mercury"
      },
      correctAnswer: "d"
    },
    {
      question: " In a U-tube mercury filled cylinder, one end is presented to the environment and the opposite end is associated with a pressurized gas. The measure weight of the gas is observed to be 40 kPa. Presently, we change the manometric liquid to water. The tallness contrast changes by: (ρmercury = 13600 kg/m3, ρwater = 1000 kg/m3).",
      answers: {
        a: "1260%",
        b: "92.64%",
        c: "Remains unchanged (0%)",
        d: "13.6%"
      },
      correctAnswer: "a"
    },
    {
      question: "What will be the height raised by the fluid in the limb if a pressure difference of 200 kPa is applied across the limb for a fluid of density 1450 kg/m3 ?",
      answers: {
        a: "12mm",
        b: "10mm",
        c: "14mm",
        d: "18mm"
      },
      correctAnswer: "c"
    },
    {
      question: "What will be the pressure difference across the limbs if a fluid of density 1000 kg/m3 rises by a height of 31mm?",
      answers: {
        a: "300 kPa",
        b: "250 kPa",
        c: "450 kPa",
        d: "150 kPa"
      },
      correctAnswer: "a"
    },
    {
      question: "What will be the time period of oscillation for a fluid which is raised by 28mm with respect to equilibrium position in one of the limbs of the U tube?",
      answers: {
        a: "0.7 second",
        b: "0.5 second",
        c: "0.2 second",
        d: "0.4 second"
      },
      correctAnswer: "b"
    }
  ];




// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
