"use strict";

// 1. Default Parameters
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  bookings.push(booking);
  console.log(booking);
  console.log(bookings);
};

createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", 5);
createBooking("LH123", 10);
createBooking("LH123", undefined, 1000);

// 2. How Passing Arguments Works: Value vs. Reference
const flight = "LH234";
const diab = {
  name: "Abdullah Diab",
  passport: 243783738689,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr." + passenger.name;

  if (passenger.passport === 243783738689) {
    console.log("Checked In");
  } else {
    console.log("Wrong passport!");
  }
};
checkIn(flight, diab);
console.log(flight);
console.log(diab);

// 3. Functions accpting callback functions
const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// Higher-order Function
const transformer = function (str, fun) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fun(str)}`);
  console.log(`Transformed by: ${fun.name}`);
};

transformer("JavaScript is the best!", upperFirstWord);
transformer("JavaScript is the best!", oneWord);

// JS uses callback all the time
const hello = function () {
  // console.log("Hello 👋🏾");
};

document.body.addEventListener("click", hello);
[1, 2, 3, 4].forEach(hello);

// 4. Functions returning functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name} `);
  };
};

const greeterHey = greet("Hey");
greeterHey("Jonas");
greeterHey("Steven");

greet("Hello")("Diab");

const say = (saying) => (hisName) => console.log(`${saying} ${hisName}`);
say("Hi")("Abdullah");

// 5. The call and apply Methods
const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  // book: function () {},
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} filght ${this.iataCode}${flightNum}`
    );

    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      name: `${name}`,
    });
  },
};

lufthansa.book("534", "Abdullah Diab");

const book = lufthansa.book; // Just copy and use the call() to call a function
book.call(lufthansa, 234, "Mary Cooper");
console.log(lufthansa.bookings);

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

// Call method
book.call(eurowings, 294, "John Hooper");
book.call(eurowings, 94, "Mark Oper");
book.call(eurowings, 21, "Heko Pop");
console.log(eurowings.bookings);

// Apply method
book.apply(eurowings, [675, "Mohamed Diab"]);
console.log(eurowings);

// Bind method
const bookEW = book.bind(eurowings);
bookEW(23, "Jouas Cooper");

// Bind method with Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;

  console.log(this.planes);
};
lufthansa.buyPlane();

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// IIFE: Immediately Invoked Function Expressions.
(function () {
  console.log("This function will never run again!");
})();

(() => console.log("This will also never run again!"))();
