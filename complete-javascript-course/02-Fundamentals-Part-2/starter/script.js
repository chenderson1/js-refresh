"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.dir("I can drive :D");

// const interface = "Audio";

// const private = 9;
/*  
=========================
challenge #1
=========================
*/
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const dolphAvg = calcAverage(85, 54, 41);
// const koalaAvg = calcAverage(23, 34, 27);

// const checkWinner = (dolphAvg, koalaAvg) => {
//   let winner;
//   let winnerAvg;
//   let loserAvg;
//   if (dolphAvg > koalaAvg) {
//     winner = "Dolphins";
//     winnerAvg = dolphAvg;
//     loserAvg = koalaAvg;
//   } else if (koalaAvg > dolphAvg) {
//     winner = "Koalas";
//     winnerAvg = koalaAvg;
//     loserAvg = dolphAvg;
//   }

//   if (winnerAvg > loserAvg * 2) {
//     console.log(`${winner} win (${winnerAvg} - ${loserAvg} )`);
//   } else {
//     console.log("no team wins");
//   }
// };

// checkWinner(dolphAvg, koalaAvg);
/*  
=========================
challenge #1
=========================
*/
/*  
=========================
Arrays
=========================
*/

// const friends = ["Jamal", "Kevin", "James"];
// // push adds element at end of array and returns new lenght
// friends.push("Willy");
// // adds to the front
// friends.unshift("john");
// //removes last element returns the removed element
// friends.pop();
// // remove first from array
// friends.shift();

// // indexOf returns index of specified or -1.

// //includes es6 return true if elements is in the array or returns false if it is not.

// console.dir(friends);

/*
============================
OBJeCt Methods
============================
*/
// const james = {
//   firstName: "James",
//   lastName: "Johnson",
//   birthYear: 1978,
//   job: "Teacher",
//   friends: ["kevin", "Willy", "Trey"],
//   hasDriversLicense: true,
//   calcAge() {
//     this.age = 2022 - this.birthYear;
//     return this.age;
//   },
//   getSummary() {
//     return `${this.firstName} is a ${this.calcAge()} year old ${this.job}. ${
//       this.hasDriversLicense ? "And has his L's" : "no L's"
//     }`;
//   },
// };

// // const jamesAge = james.calcAge();
// // james.calcAge();
// console.log(james.getSummary());

/*
========================
Loops
=========================
*/
