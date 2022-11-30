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

const colors = [
  "chartreuse",
  " darkblue",
  " darkgreen",
  " darkred",
  "crimson",
  " deeppink",
  " orangered",
];

// const getBody = document.querySelector("body");

// const ulParent = document.createElement("ul");

// for (let game of warriorsGames) {
//   const { homeTeam, awayTeam } = game;
//   const newLi = document.createElement("li");
//   ulParent.appendChild(newLi);
//   newLi.innerText = `${homeTeam.team} @ ${awayTeam.team}`;
// }
// getBody.appendChild(ulParent);

const getBody = document.querySelector("body");
const ulParent = document.createElement("ul");

for (let game of warriorsGames) {
  const { homeTeam, awayTeam } = game;
  const newLi = document.createElement("li");

  const { team: hTeam, points: hPoints } = homeTeam;
  const { team: aTeam, points: aPoints } = awayTeam;

  const teamNames = `${hTeam} @ ${aPoints}`;
  let scoreLine;
  if (aPoints > hPoints) {
    scoreLine = `<b>${aTeam} </b>- ${hPoints}`;
  } else {
    scoreLine = `${aTeam} -<b> ${hPoints}</b>`;
  }

  const warriors = hTeam === "Golden State" ? homeTeam : awayTeam;
  newLi.classList.add(warriors.isWinner ? "win" : "loss");

  newLi.innerHTML = `${teamNames} ${scoreLine}`;

  newLi.classList.add("colorLi");
  ulParent.appendChild(newLi);
}

getBody.appendChild(ulParent);

const getLiByClass = document.querySelectorAll(".colorLi");
console.log(getLiByClass);

//..............................................
// aager practice part//
// getLiByClass.forEach(function (li, i) {
//   const color = colors[i];
//   li.style.color = color;
// });

for (let i = 0; i < getLiByClass.length; i++) {
  const li = getLiByClass[i];
  li.style.color = colors[i];
}
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// 14 number er 13 number ta ses 14  number ta start
