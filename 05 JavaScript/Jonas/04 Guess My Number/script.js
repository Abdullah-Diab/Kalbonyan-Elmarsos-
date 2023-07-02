"use strict";

const body = document.querySelector("body");
const check = document.querySelector(".check");
const guessEl = document.querySelector(".guess");
const message = document.querySelector(".message");
const numberEl = document.querySelector(".number");
const scoreEl = document.querySelector(".score");
const again = document.querySelector(".again");
const highScoreEl = document.querySelector(".highscore");

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

check.addEventListener("click", function () {
  const guess = Number(guessEl.value);

  // When there is no input
  if (!guess) {
    message.textContent = "⛔ No number!";
  }
  // when player wins
  else if (guess === secretNumber) {
    message.textContent = "🎉 Correct Number :)";
    body.style.backgroundColor = " #60b347";
    numberEl.style.width = "30rem";
    numberEl.textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      highScoreEl.textContent = highScore;
    }
  }

  // When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      message.textContent =
        guess > secretNumber ? "📈 Too High!" : "📉 Too Low!";
      score--;
      scoreEl.textContent = score;
    } else {
      message.textContent = "💥 You lost the game!";
      scoreEl.textContent = 0;
    }
  }
});

again.addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  message.textContent = "Start guessing...";
  scoreEl.textContent = score;
  numberEl.textContent = "?";
  guessEl.value = "";
  body.style.backgroundColor = " #222";
  numberEl.style.width = "15rem";
});
