// JavaScript Fundamentals – Assignments Part 2
console.group("JavaScript Fundamentals – Assignments Part 2");

// LECTURE: Functions
console.log("Functions: 😀");

function describeCountry(country, population, capitalCity) {
  const description = `${country} has ${population} million people and its capital city is ${capitalCity}.`;
  return description;
}

const egypt = describeCountry("Egypt", 107, "Cairo");
const lebanon = describeCountry("Lebanon", 6.8, "Beirut");
const jordan = describeCountry("Jordan", 6.7, "Amman");

console.log(egypt);
console.log(lebanon);
console.log(jordan);

// LECTURE: Function Declarations vs. Expressions
console.log("Function Declarations vs. Expressions: 😀");

function percentageOfWorld1(country, population) {
  const calcPercentage = ((population / 7900) * 100).toFixed(1);
  const percentage = `${country} has ${population} million people, so it's about ${calcPercentage}% of the world population.`;
  return percentage;
}

const China1 = percentageOfWorld1("China", 1441);
const India1 = percentageOfWorld1("India ", 1412);
const UnitedState1 = percentageOfWorld1("United State", 332);

console.log(China1);
console.log(India1);
console.log(UnitedState1);

const percentageOfWorld2 = function (country, population) {
  const calcPercentage = ((population / 7900) * 100).toFixed(1);
  const percentage = `${country} has ${population} million people, so it's about ${calcPercentage}% of the world population.`;
  return percentage;
};

const China2 = percentageOfWorld2("China", 1441);
const India2 = percentageOfWorld2("India ", 1412);
const UnitedState2 = percentageOfWorld2("United State", 332);

console.log(China2);
console.log(India2);
console.log(UnitedState2);

// LECTURE: Arrow Functions
console.log("Arrow Functions: 😀");

const percentageOfWorld3 = (country, population) => {
  const calcPercentage = ((population / 7900) * 100).toFixed(1);
  const percentage = `${country} has ${population} million people, so it's about ${calcPercentage}% of the world population.`;
  return percentage;
};

const China3 = percentageOfWorld3("China", 1441);
const India3 = percentageOfWorld3("India ", 1412);
const UnitedState3 = percentageOfWorld3("United State", 332);

console.log(China2);
console.log(India2);
console.log(UnitedState3);

// LECTURE: Functions Calling Other Functions
console.log("Functions Calling Other Functions: 😀");

const percentageOfWorld4 = (calcPercentage) =>
  ((calcPercentage / 7900) * 100).toFixed(1);

function describePopulation(country, population) {
  const calcPercent = percentageOfWorld4(population);
  const percentage = `${country} has ${population} million people, so it's about ${calcPercent}% of the world population.`;
  return percentage;
}

console.log(describePopulation("Egypt", 107));
console.log(describePopulation("India", 1412));
console.log(describePopulation("China", 1441));

// LECTURE: Introduction to Arrays
console.log("Introduction to Arrays: 😀");

const populations = [107, 35, 4441, 71];
console.log(populations.length == 4);

const percentageOfWorld = (population) =>
  ((population / 7900) * 100).toFixed(1);

const percentages = [
  percentageOfWorld(populations[0]),
  percentageOfWorld(populations[1]),
  percentageOfWorld(populations[2]),
  percentageOfWorld(populations[3]),
];

console.log(percentages);

// LECTURE: Basic Array Operations (Methods) => push(), pop(), unshift(), shift(), includes(), indexOf().
console.log("Basic Array Operations (Methods): 😀");

const neighbours = new Array("Libya", "Palestinian", "Sudan");
neighbours.push("Utopia"); // push() : Return a number of Array.
neighbours.pop(neighbours.length - 1); // pop() : Return a remove value.

neighbours.unshift("Egypt"); // unshift() : Return a number of Array.
neighbours.shift(); // shift() : Return a remove value.

neighbours[0] = "Republic of Libya";
neighbours[neighbours.indexOf("Sudan")] = "Republic of Sudan";

console.log(neighbours);

if (!neighbours.includes("Germany")) {
  console.log(`Maybe not a country in Africa :)`);
}

// LECTURE: Introduction to Objects
console.log("Introduction to Objects: 😀");

const myCountry = {
  country: "Egypt",
  capital: "Cairo",
  language: "Arabic",
  population: 107.48,
  neighbours: ["Libya", "Palestinian", "Sudan"],
  // neighbours: [],

  describe: function () {
    console.log(
      `${this.country} has ${this["population"]} million finnish-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
    );
  },

  checkIsland: function () {
    // console.log((this.isIsland = this.neighbours.length === 0 ? true : false));
    this.isIsland = !Boolean(this.neighbours.length); // Boolean(true)
  },
};

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  getSummary: function () {
    return `${this.firstName} is a ${this.age}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },
};

jonas.location = "Portugal";
jonas["twitter"] = "@jounsschmedtman";

// Challenge : "Jonas has 3 friends, and his best friend is called Michael"
console.log(
  `${jonas.firstName} has ${jonas["friends"].length} friends, and his best friend is called ${jonas.friends[0]} :)`
);

// Challenge : "Jonas is a 46-year old teacher, and he has a driver's license"
console.log(jonas.getSummary());

// LECTURE: Dot vs. Bracket Notation
console.log("Dot vs. Bracket Notation: 😀");

console.log(
  `${myCountry.country} has ${myCountry["population"]} million finnish-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);

myCountry.population = myCountry.population + 2;
myCountry.population = myCountry.population - 3;

// LECTURE: Object Methods
console.log("Object Methods: 😀");
myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);

console.groupEnd("");
