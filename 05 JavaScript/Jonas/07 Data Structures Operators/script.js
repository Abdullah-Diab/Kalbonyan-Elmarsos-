"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}.`
    );
  },
};

// Destructuring Arrays
const [first, second] = restaurant.categories;
console.log(first, second);

// Nested Destructuring
const nested = [2, 4, [6, 8]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [a = 0, b = 0, c = 0] = [1, 2];
console.log(a, b, c);

// Destructuring Objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let m = 111;
let n = 999;
const obj = { m: 23, n: 7 };
({ m, n } = obj);
console.log(m, n);

// Nested Destructuring
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

// The Spread Operator
const arr = [3, 4, 5];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const goodNewArr = [1, 2, ...arr];
console.log(goodNewArr);
console.log(...goodNewArr);

// Copy Array
const copyMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(copyMenu);

// Iterables: arrays, strings, maps, sets.
const str = "Abdullah";
console.log(...str);
const letters = [...str, " ", "M"];
console.log(letters);

// Copy Objects
const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Beef Di";
console.log(restaurantCopy.name);
console.log(restaurant.name);

const ingredients = ["mushrooms", "aspargus", "cheese"];
restaurant.orderPasta(...ingredients);

// We used the Spread Operatoer: to bulid new arrays or to pass multiple values into a function.

// 1) Destructuring.

// Spread, because on RIGHT side of =
const arrSpread = [1, 2, ...[3, 4]];
console.log(arrSpread);

// Rest Pattern, because on LEFT side of =
const [d, f, ...others] = [1, 2, 3, 4, 5];
console.log(d, f, others);

console.log(...restaurant.mainMenu, ...restaurant.starterMenu);
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// REST on Object
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(4, 6, 7, 8);
add(10, 2, 4, 6, 4);

const x = [22, 33, 11];
add(...x);

// Short-circuiting
// ----- OR ------
console.log(3 || "Diab");
console.log("" || "Diab");
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || null || 0 || "DIAB" || 6 || "");

// restaurant.numGuests = 23;
restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);
const guests2 = restaurant.numGuests || 10;
console.log(guests2);
const guestsCorrect = restaurant.numGuests ?? 10; // The Nullish Coalescing Operator (??)
console.log(guestsCorrect); // Nullish: null and undefiend (NOT 0 or "")

// ----- AND ------
console.log(3 && "Diab");
console.log(false && "Diab");
console.log(true && 0);
console.log(undefined && null);
console.log("DIAB" && 6 && "");

// Logical Assignment Operator
const rest1 = {
  name: "Capri",
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: "La Piazza",
  owner: "Giovanni Rossi",
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

console.log(rest1);
console.log(rest2);

// NULLISH assignment operator
// rest1.numGuests = rest1.numGuests ?? 10;
// rest2.numGuests = rest2.numGuests ?? 10;
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

console.log(rest1);
console.log(rest2);

// AND assignment operator
// rest1.owner = rest1.owner && "<ANONYMOUS>";
// rest2.owner = rest2.owner && "<ANONYMOUS>";
rest1.owner &&= "<ANONYMOUS>";
rest2.owner &&= "<ANONYMOUS>";

console.log(rest1);
console.log(rest2);

// The FOR-OF LOOP
const menuEL = [...restaurant.mainMenu, ...restaurant.starterMenu];
// for (let i = 0; i < menuEL.length; i++) {
//   console.log(`${i + 1}: ${menuEL[i]}`);
// }
for (let item of menuEL) console.log(item);
for (let [i, el] of menuEL.entries()) console.log(`${i + 1}: ${el}`);

// With Optional Chaining.
console.log(restaurant.openingHours?.fri?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(
    `On ${day}, We ${
      restaurant.openingHours[day] ? `open at ${open}` : "close"
    }`
  );
}

// Methods
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");

// Arrays
const users = [{ name: "Diab", email: "hello@diab.io" }];
// const users = [];
console.log(users[0]?.name ?? "User array empty");
// if (users.length > 0) console.log(users[0].name);
// else console.log("User array empty");

// LOOPING Objects: Property NAMES
const properties = Object.keys(openingHours);
// Output: ["thu", "fri", "sat"]
let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  // console.log(day);
  openStr += `${day}. `;
}
console.log(openStr);

// LOOPING Objects: Property VALLUES
const values = Object.values(openingHours);
console.log(values);

// LOOPING Objects: Entire Object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key}, We open at ${open} and close at ${close}.`);
}

// --- SETS ---
const orderSets = new Set(["Pizza", "Pasta", "Pizza", "Risotto"]);
console.log(orderSets);
console.log(orderSets.size);
console.log(orderSets.has("Pizza"));
orderSets.add("Bread");
orderSets.delete("Pizza");
orderSets.clear();
console.log(orderSets);

const nameSet = new Set("DIAB");
for (let cher of nameSet) console.log(cher);

// Real Example
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

// --- MAPS ---
const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, italy");
rest.set(2, "Lisbon, Portugal");
rest.set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"]);
rest
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are closed :(");

console.log(rest);
console.log(rest.get("name"));
console.log(rest.get(2));
console.log(rest.get(false));

// Real Example
const time = 21;
const check = rest.get(time > rest.get("open") && time < rest.get("close"));
console.log(check); // OUTPUT: We are open :D

console.log(rest.has("categories"));
rest.delete(1);
rest.clear();
console.log(rest.size);

const question = new Map([
  ["question", "What is The best programming language in the World?"],
  [1, "C++"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct 🎉"],
  [false, "Try again!"],
]);
console.log(question);

// Quiz app
console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt("Your answer"));
const answer = 3;
const checkAnswer = question.get(question.get("correct") === answer);
console.log(`${answer} ---> ${checkAnswer}`);

console.log();

// Convert Object to Map
console.log(Object.entries(restaurant.openingHours));
const hoursMap = new Map(Object.entries(restaurant.openingHours));
console.log(hoursMap);

// Convert Map to Array
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);

// --- STRINGS ---
// length, indexOf(), lastIndexOf(), slice(), toLowerCase(), toUpperCase(), padStart(), padEnd().
// trim(), replace(), includes(), startsWith(), endsWith(), split(), join(), repeat().
const airline = "TAP Air Portugal";
const plane = "A320";

console.log(airline[0]);
console.log(plane[2]);
console.log("B737"[1]);

console.log(airline.length);
console.log("B737".length);

console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("portugal"));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));
console.log(airline.slice(-2));
console.log(airline.slice(4, -1));

// REAL EXAMPLE
const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === "E" || s === "B") console.log("You got the middle seat 😬");
  else console.log("You got lucky 😎");
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

console.log(airline.toLowerCase());
console.log("diab".toUpperCase());

// FIX Capitalization in name.
const passenger = "aBdULlah"; // Abdullah
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Function for FIX Capitalization in name.
const fixName = function (name) {
  const nameLower = name.toLowerCase();
  const nameCorrect = nameLower[0].toUpperCase() + nameLower.slice(1);
  console.log(nameCorrect);
};

fixName("aBdULlah");
fixName("DiAB");

// Comparing Emails.
const email = "hello@diab.io";
const loginEmail = "   Hello@Diab.Io \n";

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);

console.log(email === trimmedEmail);

// Replacing
const priceGB = "288,97£";
const priceUS = priceGB.replace("£", "$").replace(",", ".");
console.log(priceUS);

const announcement =
  "All passengers come to boarding door 23. Boarding door 23!";
console.log(announcement.replace("door", "gate"));
console.log(announcement.replace(/door/g, "gate"));

// Booleans
const bus = "Airbus A320neo";
console.log(bus.includes("A320"));
console.log(bus.startsWith("Air"));
console.log(bus.endsWith("ne"));

if (bus.startsWith("Airbus") && bus.endsWith("neo")) {
  console.log("Part of the NEW airbus family :)");
}

// Practice Exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are not allowed on aboard :(");
  } else {
    console.log("Welcome aboard!");
  }
};

checkBaggage("I have a laptop, some food and a pocket Knife");
checkBaggage("I have Socks and Camera");
checkBaggage("Got some snacks and a gun for portection");

// --- Split and Join ---
console.log("Abdullah Diab".split(" "));
const [firstName, lastName] = "Abdullah Diab".split(" ");
const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

// Capitalization Function
const capitalization = function (sentence) {
  const wordArray = sentence.split(" ");
  const wordsUpper = [];
  for (const word of wordArray) {
    // wordsUpper.push(word[0].toUpperCase() + word.slice(1));
    wordsUpper.push(word.replace(word[0], word[0].toUpperCase()));
  }
  console.log(wordsUpper.join(" "));
};
capitalization("good morning everybody!");
capitalization("abdullah mohamed zakaria.");

// Padding
const message = "Go to gate 23!";
console.log(message.padStart(20, "+").padEnd(30, "+"));

const maskcreditCard = function (number) {
  // const str = number + "";
  const str = String(number);
  const last = str.slice(-4);
  console.log(last.padStart(str.length, "*"));
};

maskcreditCard(1234567800003456);
maskcreditCard("1234567899800232");

// Repeat
const alart = "Bad weather...🔔 ";
console.log(alart.repeat(3));

const planesInLine = function (n) {
  console.log(`There are ${n} plane in line ${"✈️".repeat(n)}`);
};
planesInLine(3);
planesInLine(5);
planesInLine(7);
