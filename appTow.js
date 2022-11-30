const warriorsGames = [
  {
    awayTeam: {
      team: "Golden State",
      points: 119,
      isWinner: true,
    },

    homeTeam: {
      team: "Houston",
      points: 106,
      isWinner: false,
    },
  },

  {
    awayTeam: {
      team: "Golden State",
      points: 105,
      isWinner: false,
    },
    homeTeam: {
      team: "Houston",
      points: 127,
      isWinner: true,
    },
  },

  {
    homeTeam: {
      team: "Golden State",
      points: 126,
      isWinner: true,
    },
    awayTeam: {
      team: "Houston",
      points: 85,
      isWinner: false,
    },
  },

  {
    homeTeam: {
      team: "Golden State",
      points: 92,
      isWinner: false,
    },
    awayTeam: {
      team: "Houston",
      points: 95,
      isWinner: false,
    },
  },

  {
    awayTeam: {
      team: "Golden State",
      points: 94,
      isWinner: false,
    },
    homeTeam: {
      team: "Houston",
      points: 98,
      isWinner: true,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 115,
      isWinner: true,
    },
    homeTeam: {
      team: "Houston",
      points: 86,
      isWinner: false,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 101,
      isWinner: true,
    },
    homeTeam: {
      team: "Houston",
      points: 92,
      isWinner: false,
    },
  },
];

const getBody = document.querySelector("body");

const ulParent = document.createElement("ul");

for (let game of warriorsGames) {
  const { homeTeam, awayTeam } = game;
  const newLi = document.createElement("li");
  ulParent.appendChild(newLi);
  newLi.innerText = `${homeTeam.team} @ ${awayTeam.team}`;
}
getBody.appendChild(ulParent);

//..............................................

const allLi = document.querySelectorAll("li");
const colors = ["red", "green", "ornage", "blue", "purple", "pink"];

// allLi.forEach(function (li, i) {
//   const color = colors[i];
//   li.style.color = color;
// });

// allLi.forEach(function (li, i) {
//   const color = colors[i];
//   li.style.color = color;
// });

// for (let i = 0; i < allLi.length; i++) {
//   allLi[i].style.color = colors[i];
// }

// allLi.forEach(function (li, i) {
//   const color = colors[i];
//   li.style.color = color;
// });

// allLi.forEach(function (li, i) {
//   const color = colors[i];
//   li.style.color = color;
// });

for (let i = 0; i < allLi.length; i++) {
  allLi[i].style.color = colors[i];
}
