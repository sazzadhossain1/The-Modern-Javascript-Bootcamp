for (let i = 1; i <= 10; i++) {
  let star = "";
  for (let indx = 1; indx <= i; indx++) {
    star += "*";
  }
  console.log(star);
}

for (let i = 1; i <= 10; i++) {
  let str = "";
  for (let index = 1; index <= i; index++) {
    str += index + " ";
  }
  console.log(str);
}

for (let i = 1; i <= 10; i++) {
  let str = "";
  for (let ix = 1; ix <= i; ix++) {
    str += "$*$" + " ";
  }
  console.log(str);
}

let name = "sazzad";
// console.log(name[0].toUpperCase());
console.log(name.replace(name[0], name[0].toUpperCase()));

const n = "sazzad";
console.log(n.replace(n[0], n[0].toUpperCase()));

const fullName = "sazzad hossain tomal";
console.log(
  fullName
    .replace(fullName[0], fullName[0].toUpperCase())
    .replace(fullName[7], fullName[7].toUpperCase())
    .replace(fullName[15], fullName[15].toUpperCase())
);

console.log("------- Practice Reduce --------");

const votes = [
  "y",
  "y",
  "n",
  "z",
  "y",
  "n",
  "y",
  "n",
  "y",
  "n",
  "n",
  "n",
  "z",
  "y",
  "z",
  "y",
];

const number = [12, 25, 46, 27, 32, 2000];
const votes1 = ["Yes", "No", "Yes", "Yes", "Yes", "No", "Absent"];
const books1 = [
  {
    title: "Good Omens",
    authors: ["Terry pratchett", "Neil Gaiman"],
    rating: 4.25,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "changing My Mind",
    authors: ["Zadie Smith"],
    rating: 3.83,
    genres: ["nonfiction", "essays"],
  },
  {
    title: "Bone the complete Edition",
    authors: ["Jeff Smith"],
    rating: 4.42,
    genres: ["fiction", "graphic novel", "fantasy"],
  },
  {
    title: "American Gods",
    authors: ["Neil Gaiman"],
    rating: 4.11,
    genres: ["fiction", "fantasy"],
  },

  {
    title: "A Genteman in Moscow",
    authors: ["Amor Towles"],
    rating: 4.36,
  },
  {
    title: "A Gentleman in Moscow",
    authors: ["Amor Towles"],
    rating: 4.36,
    genres: ["fiction", "historical fiction"],
  },
  {
    title: "The Name of the Wind",
    authors: ["Patrick Rothfuss"],
    rating: 4.54,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "The Overstory",
    authors: ["Richard Powers"],
    rating: 4.19,
    genres: ["fiction", "short stories"],
  },
  {
    title: "The Way of King",
    authors: ["Brandon Sanderson"],
    rating: 4.65,
    genres: ["fantasy", "epic"],
  },
  {
    title: "Lord of the flies",
    authors: ["william golding"],
    rating: 3.67,
    genres: ["fiction"],
  },
];

const objectReduce = votes.reduce((acc, val) => {
  if (acc[val]) {
    acc[val]++;
  } else {
    acc[val] = 1;
  }
  return acc;
}, {});
console.log(objectReduce);

//..................................

const sumReduce = number.reduce((acc, val) => {
  return acc + val;
}, 0);
console.log(sumReduce);

//..................................

const votReduce = votes1.reduce((acc, val) => {
  if (acc[val]) {
    acc[val]++;
  } else {
    acc[val] = 1;
  }
  return acc;
}, {});
console.log(votReduce);

//.....................................

const ratingReduce = books1.reduce((acc, val) => {
  return acc + val.rating;
}, 0);
console.log(ratingReduce);

console.log("------ sort part ------");

const prices = [400.5, 3000, 99.99, 35.99, 12.0, 9500];
const persone = ["sazzad", "hossain", "tomal", "shayla", "akther"];

const sortPersone = persone.sort();
console.log(sortPersone);

const sortNum = prices.sort((acc, val) => {
  return acc - val;
});
console.log(sortNum);

const sortNum1 = prices.sort((acc, val) => {
  return val - acc;
});
console.log(sortNum1);

const booksRatingSmallToBig = books1.sort((acc, val) => {
  return acc.rating - val.rating;
});
console.log(booksRatingSmallToBig);

console.log("-------Big To Small-------");

const bookRatingBigToSmall = books1.sort((acc, val) => {
  return val.rating - acc.rating;
});
console.log(bookRatingBigToSmall);

console.log("=========== xxxxxxx ==========");

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
  "green",
  " darkblue",
  " darkgreen",
  " darkred",
  "crimson",
  " deeppink",
  " orangered",
];

// const getBody = document.querySelector("body");
// const ulParent = document.createElement("ul");
// console.log(ulParent);

// for (game of warriorsGames) {
//   const { homeTeam, awayTeam } = game;
//   const gameLi = document.createElement("li");

//   const { team: hTeam, points: hPoints } = homeTeam;
//   const { team: aTeam, points: aPoints } = awayTeam;

//   const teamName = `${aTeam} @ ${hTeam}`;

//   let scoreLine;
//   if (aPoints > hPoints) {
//     scoreLine = `<b>${aPoints}</b>-${hPoints}`;
//   } else {
//     scoreLine = `${aPoints}-<b>${hPoints}</b>`;
//   }

//   const warriors = hTeam === "Golden State" ? homeTeam : awayTeam;
//   gameLi.classList.add(warriors.isWinner ? "win" : "loss");
//   gameLi.innerHTML = `${teamName} ${scoreLine}`;
//   ulParent.appendChild(gameLi);
// }

// getBody.appendChild(ulParent);

// const colorLi = document.querySelectorAll("li");
// colorLi.forEach(function (li, i) {
//   const color = colors[i];
//   li.style.color = color;
// });

///////////////////////////////////////////////////////

const getBody = document.querySelector("body");

const ulParent = document.createElement("ul");
console.log(ulParent);
for (game of warriorsGames) {
  const { homeTeam, awayTeam } = game;
  const gameLi = document.createElement("li");
  ulParent.appendChild(gameLi);

  const { team: hTeam, points: hPoints } = homeTeam;
  const { team: aTeam, points: aPoints } = awayTeam;

  const teamName = `${hTeam} @ ${aTeam}`;

  let scoreLine;
  if (aPoints > hPoints) {
    scoreLine = `<b>${hPoints}</b>-${aPoints}`;
  } else {
    scoreLine = `${hPoints}-<b>${aPoints}</b>`;
  }
  const warriors = hTeam === "Golden State" ? homeTeam : awayTeam;
  gameLi.classList.add(warriors.isWinner ? "win" : "loss");

  gameLi.innerHTML = `${teamName} ${scoreLine}`;
}

getBody.appendChild(ulParent);

const colorLi = document.querySelectorAll("li");

colorLi.forEach(function (li, i) {
  const color = colors[i];
  li.style.color = color;
});
