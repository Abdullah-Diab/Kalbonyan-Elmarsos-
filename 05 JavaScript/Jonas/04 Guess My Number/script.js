"use strict";

const check = document.querySelector(".check");
const guessEl = document.querySelector(".guess");
const message = document.querySelector(".message");
const numberEl = document.querySelector(".number");
const scoreEl = document.querySelector(".score");

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

numberEl.textContent = secretNumber;

check.addEventListener("click", function () {
  const guess = Number(guessEl.value);

  if (!guess) {
    message.textContent = "⛔ No number!";
  } else if (guess === secretNumber) {
    message.textContent = "🎉 Correct Number :)";
  } else if (guess > secretNumber) {
    if (score > 1) {
      message.textContent = "📈 Too High!";
      score--;
      scoreEl.textContent = score;
    } else {
      message.textContent = "💥 You lost the game!";
      scoreEl.textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      message.textContent = "📉 Too Low!";
      score--;
      scoreEl.textContent = score;
    } else {
      message.textContent = "💥 You lost the game!";
      scoreEl.textContent = 0;
    }
  }
});
