const currencyElOne = document.getElementById("currency-one");
const currencyElTwo = document.getElementById("currency-two");
const amountElOne = document.getElementById("amount-one");
const amountElTwo = document.getElementById("amount-two");
const rateEl = document.getElementById("rate");
const swapEl = document.getElementById("swap");

// Fetch exchange rates and update the DOM
function calculate() {
  const currencyOne = currencyElOne.value;
  const currencyTwo = currencyElTwo.value;
  fetch("https://open.exchangerate-api.com/v6/latest")
    .then((result) => result.json())
    .then((data) => {
      const rate = data.rates[currencyTwo] / data.rates[currencyOne];
      rateEl.innerText = `1 ${currencyOne} = ${rate.toFixed(2)} ${currencyTwo}`;
      amountElTwo.value = (amountElOne.value * rate).toFixed(2);
    });
}

// Event listeners
currencyElOne.addEventListener("change", calculate);
currencyElTwo.addEventListener("change", calculate);
amountElOne.addEventListener("input", calculate);
amountElTwo.addEventListener("input", calculate);
swap.addEventListener("click", () => {
  const temp = currencyElOne.value;
  currencyElOne.value = currencyElTwo.value;
  currencyElTwo.value = temp;
  calculate();
});

calculate();
