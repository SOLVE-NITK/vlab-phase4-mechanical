
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
    question: "The front view, side view, and top view of the regular square pyramid standing on the horizontal plane base on a horizontal plane.",
    answers: {
    	a: "Triangle, Triangle & Square",
        b: "Square, Triangle & Triangle",
        c: "Square, Triangle & Triangle",
        d: "Triangle, Square & Triangle"
    },
    correctAnswer: "a"
  },

  {
    question: "Hexagon pyramid is placed in such a way its axis is perpendicular to HP and one edge AB parallels to VP and then next this turns about its axis so the base AB is now making some angle with VP. The top view of the previous and later one will be having the same shape.",
    answers: {
      a: "True",
      b: "False",
      c: "Not related",
      d: "Can't say"
    },
    correctAnswer: "a"
  },

  {
    question: " A triangular pyramid is placed such that its axis is perpendicular to VP and one of its base’s edge is parallel to HP the front view and top view will be _______",
    answers: {
      a: "Triangle of the base, Triangle due to slanting side",
      b: "Triangle due slanting side, Triangle of base",
      c: "Triangle of Base, Rhombus",
      d: "Rhombus, Triangle of Base"
    },
    correctAnswer: "a"
  },
  {
    question: " A cylinder is first placed such that its axis is perpendicular to VP and next this is tilted such that its axis is making some acute angle with VP. The top view for the previous and later one will be _______",
    answers: {
      a: " Circle, Rectangle with circular ends",
      b: "Circle, Rectangle",
      c: "Rectangle, Rectangle",
      d: "Rectangle with circular ends, Circle"
    },
    correctAnswer: "c"
  },
  {
    question: " Which of the following solid have one of the views as square and the other as a rectangle?",
    answers: {
      a: "Cube",
      b: "Cuboid",
      c: "cone",
      d: "None"
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
