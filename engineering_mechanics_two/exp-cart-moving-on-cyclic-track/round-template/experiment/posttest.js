
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
      question: "For a cart moving with velocity of 50m/s the height reached by cart is ?",
      answers: {
        a: "143.5m",
        b: "127.5m",
        c: "151.7m",
        d: "152.4"
      },
      correctAnswer: "b"
    },
    {
      question: "If the cart has reached a height between 180m to 90m the velocity given to cart is",
      answers: {
        a: "<img src=\'images\/sq1.png'>",
        b: "<img src=\'images\/sq1.png'>",
        c: "Less than <img src=\'images\/sq2.png'>",
        d: "Between <img src=\'images\/sq1.png'> and <img src=\'images\/sq2.png'>"
      },
      correctAnswer: "d"
    },
    {
      question: "If the cart is given velocity of 42m/s what is the height reached by cart ?",
      answers: {
        a: "R metres",
        b: "2R metres",
        c: "Between 2R and R metres",
        d: "Undefined"
      },
      correctAnswer: "a"
    },
    {
      question: "Keeping the velocity same and changing the mass is the height reached same",
      answers: {
        a: "Yes",
        b: "No"
      },
      correctAnswer: "c"
    },
    {
      question: "The cart is given velocity of 59m/s for mass of 50 kg and 100 kg the height reached was",
      answers: {
        a: "120m,140m",
        b: "158m,169m",
        c: "136m,145m",
        d: "178m,178m"
      },
      correctAnswer: "d"
    },
    {
      question: "If the cart is stopped at any point does the cart have any instantaneous velocity?",
      answers: {
        a: "Yes",
        b: "No"
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
