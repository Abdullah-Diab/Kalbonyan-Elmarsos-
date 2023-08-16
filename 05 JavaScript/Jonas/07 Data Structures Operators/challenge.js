// Coding Challenge #1
console.group("Coding Challenge #1");

// Your tasks:
// 1. Create one player array for each team (variables 'players1' and 'players2').
// 2. The first player in any player array is the goalkeeper and the others are field players.
//    For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players.
// 3. Create an array 'allPlayers' containing all players of both teams (22 players).
// 4. During the game, Bayern Munich (team 1) used 3 substitute players,
//    So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'.
// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console,
//    along with the number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.

// Test data for 6:
//  First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
//  Then, call the function again with players from game.scored

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
// const players1 = game.players[0];
// const players2 = game.players[1];
const [players1, players2] = game.players;

// 2.
const [goalkeeper, ...fieldPlayers] = players1;

// 3.
const allPlayers = [...players1, ...players2];

// 4.
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(...players1Final);

// 5.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6.
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored.`);
};
printGoals(...game.scored);
printGoals("Lewandowski", "Gnarby", "Lewandowski");

// 7.
team1 < team2 && console.log("Team 1 is more likely to win.");
team1 > team2 && console.log("Team 2 is more likely to win.");
console.groupEnd();

// Coding Challenge #2
console.group("Coding Challenge #2");

// Your tasks:
// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski").
// 2. Use a loop to calculate the average odd and log it to the console.
// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33, Odd of draw: 3.25, Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw").

// Hint: Note how the odds and the game objects have the same property names :)

// 4. Bonus: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value.
// In this game, it will look like this:
// {
//  Gnarby: 1,
//  Hummels: 1,
//  Lewandowski: 2
// }

// 1.
const goals = game.scored.entries();
console.log(goals);
for (let [i, player] of goals) console.log(`Goal ${i + 1}: ${player}`);

// 2.
const odds = Object.values(game.odds);
let average = 0;
for (let odd of odds) average += odd;
console.log(average / odds.length);

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "drow" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

// 4.
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);

console.groupEnd();

// Coding Challenge #3
console.group("Coding Challenge #3");
// Let's continue with our football betting app! This time, we have a map called 'gameEvents' (see below) with a log of the events that happened during the game.
// The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

// Your tasks:
// 1. Create an array 'events' of the different game events that happened (no duplicates).
// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
// 3. Compute and log the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes).
// 4. Loop over 'gameEvents' and log each element to the console, marking whether it's in the first half or second half (after 45 min) of the game,
//    like this: [FIRST HALF] 17: ⚽ GOAL.

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🟨 Yellow card"],
  [69, "🟥 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🟨 Yellow card"],
]);

// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.
gameEvents.delete(64);
console.log(gameEvents);

// 3.
const gameTime = [...gameEvents.keys()].pop(); // To get the last element in Map
console.log(
  `An event happened, on average, every ${
    gameTime / gameEvents.size
  } minutes :)`
);

// 4.
for (const [key, value] of gameEvents) {
  const timeCheck = key <= 45 ? `[FIRST  HALF]` : `[SECOND HALF]`;
  console.log(`${timeCheck} ${key}: ${value}.`);
}
console.groupEnd();

// Coding Challenge #4
console.group("Coding Challenge #4");
// Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

// Input VS. Output: ✅
// underscore_case   ------> underscoreCase
//  first_name       ------> firstName
// Some_Variable     ------> someVariable
//   calculate_AGE   ------> calculateAge
// delayed_departure ------> delayedDeparture

const convert = function (str) {
  const string = str.toLowerCase().trim();
  const [first, second] = string.split("_");
  // const camelCase = `${first}${second[0].toUpperCase()}${second.slice(1)}`;
  const camelCase = `${first}${second.replace(
    second[0],
    second[0].toUpperCase()
  )}`;
  console.log(`${camelCase.padEnd(20)} ✅`);
};

convert("underscore_case");
convert(" first_name");
convert("Some_Variable ");
convert("  calculate_AGE");
convert("delayed_departure");

console.groupEnd();

// String Methods Practice
console.group("String Methods Practice");

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = (str) => str.slice(0, 3).toUpperCase();

for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const output = `${type.startsWith("_Delayed") ? "🔴" : ""}${type.replaceAll(
    "_",
    " "
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ":",
    "h"
  )})`.padStart(44);
  console.log(output);
}
console.groupEnd();
