"use strict";

// ------ BANKIST APP ------
/////////////////////////////

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = function (movements) {
  containerMovements.innerHTML = "";

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i} ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = function (account) {
  account.balance = acc.move.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = `${account.balance} €`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumIn.textContent = `${incomes}€`;

  const outcomes = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumOut.textContent = `${-1 * outcomes}€`;
  // labelSumOut.textContent = `${Math.abs(outcomes)}€`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((mov) => (mov * acc.interestRate) / 100)
    .filter((mov) => mov >= 1)
    .reduce((acc, cur) => acc + cur);
  labelSumInterest.textContent = `${interest}`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.userName = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUsernames(accounts);
console.log(accounts);

// Event handler
let currentAccount;
btnLogin.addEventListener("click", function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.userName === inputLoginUsername.value
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;
    // Clear Input Fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();
    // Display movements
    displayMovements(currentAccount.movements);
    // Display balance
    calcDisplayBalance(currentAccount);
    // Display Summary
    calcDisplaySummary(currentAccount);
  }
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(
    (acc) => acc.userName === inputTransferTo.value
  );
});

// ------ LECTURES ------
//////////////////////////

// SLICE
const arr = ["a", "b", "c", "d", "e", "f"];
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
// 2 methods to Copy the Array.
console.log(arr.slice());
console.log([...arr]);

// SPLICE
// console.log(arr.splice(2));
arr.splice(-1); // to remove the last element in array
console.log(arr);

// REVERSE
const arr2 = ["g", "f", "e", "d", "c", "b", "a"];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(" - "));

// AT
const num = [34, 76, 88];
console.log(num[0]);
console.log(num.at(0));

console.log("DIAB".at(-1));

// getting last array element
console.log(num[num.length - 1]);
console.log(num.slice(-1)[0]);
console.log(num.at(-1));

// FOREACH
const history = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, process] of history.entries()) {
  if (process > 0) {
    console.log(`Movement ${i + 1}: You deposited ${process}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(process)}`);
  }
}

console.log(`------- forEach -------`);

history.forEach(function (process, index, array) {
  if (process > 0) {
    console.log(`Movement ${index + 1}: You deposited ${process}`);
  } else {
    console.log(`Movement ${index + 1}: You withdrew ${Math.abs(process)}`);
  }
});

// forEach on MAPS and SETS
const currency = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currency.forEach(function (value, key, map) {
  console.log(`${key}: ${value}.`);
});

const currencyUnique = new Set(["USD", "EUR", "GBP", "USD", "EUR"]);
currencyUnique.forEach(function (value) {
  console.log(`${value}: ${value}`);
});

// The map() Method
const eurToUSD = 1.1;
const movementsUSD = account1.movements.map((mov) => mov * eurToUSD);
// const movementsUSD = account1.movements.map(function (mov) {
//   return mov * eurToUSD;
//   return 23;
// });
console.log(account1.movements);
console.log(movementsUSD);

const evenArray = [2, 4, 6, 8, 10];
const doubleArray = evenArray.map(function (num) {
  return num * 2;
});
console.log(evenArray);
console.log(doubleArray);

// The filter() Method
const deposits = account1.movements.filter(function (mov) {
  return mov > 0;
});
console.log(account1.movements);
console.log(deposits);

const whitdrawals = account1.movements.filter((mov) => mov < 0);
console.log(whitdrawals);

// The reduce() Method
console.log(account1.movements);

// accuulator is like a Snowball
const balance = account1.movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);
console.log(balance);

const balance2 = account1.movements.reduce((acc, cur) => acc + cur, 100);
console.log(balance2);

// Maximum value
const maximumValue = account1.movements.reduce((max, mov) => {
  if (max > mov) return max;
  else return mov;
}, account1.movements[0]);
console.log(maximumValue);

// const eurToUSD = 1.1;
const totalDepositsUSD = account1.movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * eurToUSD)
  .reduce((acc, cur) => acc + cur, 0);

console.log(totalDepositsUSD);

// The find() Method
const firstWithdrawal = account1.movements.find((mov) => mov < 0);
console.log(account1.movements);
console.log(firstWithdrawal);

console.log(accounts);
const account = accounts.find((acc) => acc.owner === "Jessica Davis");
console.log(account);
