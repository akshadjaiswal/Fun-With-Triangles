const quizForm = document.querySelector(".quiz-form");
const submitAnswerButton = document.querySelector("#submit-answer-btn");
const outputE1 = document.querySelector("#output");

const correctAnswers = [
  "90°",
  "Right Angle",
  "equilateral triangle",
  "midsegment",
  "altitude",
  "centroid",
  "concurrent",
  "one-half",
  "orthocenter",
  "2",
];

function caclculateScore() {
  let score = 0;
  let index = 0;
  const formResults = new FormData(quizForm);
  //console.log(formResults);
  for (let value of formResults.values()) {
    if (value === correctAnswers[index]) {
      score = score + 1;
    }
    index = index + 1;
  }

  outputE1.innerText = "Your score is " + score;
}

submitAnswerButton.addEventListener("click", caclculateScore);
