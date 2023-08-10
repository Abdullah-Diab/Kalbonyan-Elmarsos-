"use strict";

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

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
