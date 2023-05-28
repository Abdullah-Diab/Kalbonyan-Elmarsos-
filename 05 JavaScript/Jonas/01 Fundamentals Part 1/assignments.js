// JavaScript Fundamentals – Assignments Part 1
console.group("JavaScript Fundamentals – Assignments Part 1");

// LECTURE: Values and Variables
let myCountry = "Egypt";
let continent = "Africa";
let population = 107.48;
console.log(
  myCountry +
    " is my country. It is located in " +
    continent +
    " and has a population of " +
    population +
    " million."
);

// LECTURE: Data Types
let isIsland = true;
let language;
console.log(typeof isIsland);
console.log(typeof myCountry);
console.log(typeof population);
console.log(typeof language);

// LECTURE: let, const and var
language = "Arabic";
// const firstName;
const firstName = "Abdullah";
// firstName = "Diab";

// LECTURE: Basic Operators
const halfPopulation = population / 2;
console.log(
  "Half of the population of Egypt is " + halfPopulation + " million."
);

population++;
console.log(population);

const populationFinland = 6;
console.log(population > populationFinland);

const populationAverage = 33;
console.log(population < populationAverage);

const description =
  "Portugal is in Europe, and its 11 million people speak portuguese";

// LECTURE: Strings and Template Literals
const descriptionNew = `${myCountry} is in ${continent}, and its ${population} million people speak ${language}.`;
console.log(descriptionNew);

// LECTURE: Taking Decisions: if / else Statements
if (population > populationAverage) {
  console.log(`${myCountry}'s population is above average.`);
} else {
  console.log(`${myCountry}'s population is 22 million below average.`);
}

// LECTURE: Type Conversion and Coercion
// '9' - '5';                   ---> 4
// '19' - '13' + '17';          ---> 617
// '19' - '13' + 17;            ---> 23
// '123' < 57;                  ---> false
// 5 + 6 + '4' + 9 - 4 - 2;     ---> 1143

console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("123" < 57);
console.log(5 + 6 + "4" + 9 - 4 - 2);

// LECTURE: Equality Operators: == vs. ===
// const numNeighbours = Number(
//   prompt("How many neighbour countries does your country have?")
// );

// if (numNeighbours === 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }

// LECTURE: Logical Operators
const countrySpeak = "English";
const countryPopulation = 50;
const countryName = "Canada";

if (
  countrySpeak === "English" &&
  countryPopulation < 50 &&
  countryName !== "island"
) {
  console.log("You should live in Canada :)");
} else {
  console.log("Canada does not meet your criteria :(");
}

// LECTURE: The switch Statement
const languageSpeackers = "mandarin";

switch (languageSpeackers) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers!");
    break;
  case "english":
    console.log("3rd place in number of native speakers!");
    break;
  case "hindi":
    console.log("4th place in number of native speakers!");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;

  default:
    console.log("Great language too :D");
}

// LECTURE: The Conditional (Ternary) Operator

console.log(
  `${myCountry}'s population is ${
    populationAverage > 33 ? "above" : "below"
  } average`
);

console.groupEnd("");
