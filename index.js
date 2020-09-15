import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
const worldCup2014 = fifaData.filter(game => {
    return game.Year === 2014 && game.Stage === "Final";
});

console.log(worldCup2014[0]["Home Team Name"]);
console.log(worldCup2014[0]["Away Team Name"]);
console.log(worldCup2014[0]["Home Team Goals"]);
console.log(worldCup2014[0]["Away Team Goals"]);
let winner = "";
if(worldCup2014[0]["Home Team Goals"] > worldCup2014[0]["Away Team Goals"]) {
    winner = worldCup2014[0]["Home Team Name"];
} else {
    winner = worldCup2014[0]["Away Team Name"];
}
console.log(winner);


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    return data.filter(game => {
        return game.Stage === "Final";
    })
};

console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callBack) {
    let finals = callBack(fifaData);
    return finals.map(game => {
        return game.Year;
    });
};

console.log(getYears(getFinals));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callBack) {
    let winners = callBack(fifaData);
    return winners.map(game => {
        if(game["Home Team Goals"] > game["Away Team Goals"]) {
            return game["Home Team Name"];
        } else {
            return game["Away Team Name"];
        }
    })
};

console.log(getWinners(getFinals));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(callBack1, callBack2) {
    let winners = callBack1(getFinals);
    let years = callBack2(getFinals);
    return winners.map((item, index) => {
        return `In ${years[index]}, ${item} won the world cup!`;
    });
};

console.log(getWinnersByYear(getWinners, getYears));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    let homeGoals = data.reduce((acc, curr) => {
        return acc += curr["Home Team Goals"];
    }, 0) / data.length;
    let awayGoals = data.reduce((acc, curr) => {
        return acc += curr["Away Team Goals"];
    }, 0) / data.length;
    return `Average Home Team Goals: ${homeGoals}, Average Away Team Goals: ${awayGoals}`;
};

console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, teamInitials) {
    let finals = data.filter(item => {
        return item.Stage === "Final";
    });
    let teamFinals = finals.filter(game => {
        return game["Home Team Initials"] === teamInitials || game["Away Team Initials"] === teamInitials;
    });
    console.log(teamFinals);
    let wins = teamFinals.reduce((acc, curr) => {
        if(curr['Home Team Initials'] === teamInitials && curr['Home Team Goals'] > curr['Away Team Goals']) {
            return ++acc;
        } else if(curr['Away Team Initials'] === teamInitials && curr['Home Team Goals'] < curr['Away Team Goals']) {
            return ++acc;
        } else if(curr['Home Team Goals'] === curr['Away Team Goals'] && curr['Win conditions'].includes('Italy')) {
            return ++acc;
        } else {
            return acc;
        }
    }, 0);
    return wins;
};

console.log(getCountryWins(fifaData, 'ITA'));


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals scored per appearance (average goals for) in the World Cup finals */

function getGoals(data) {

    let finals = getFinals(data);
    return finals.map(game => {
        
    });

};

getGoals(fifaData);


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
