const fitBitData = {
  totalSteps: 308727,
  totalMiles: 211.7,
  avgCalorieBurn: 5755,
  workoutsThisWeek: "5 of 7",
  avgGoodSleep: "2:13",
  45: "forty five",
  16: "sixteen",

  "100 one Hundred": "one hundred",
};
console.log(fitBitData.totalMiles);
console.log(fitBitData.workoutsThisWeek);
console.log(fitBitData[45]);
console.log(fitBitData["16"]);

console.log(fitBitData["100 one Hundred"]);

// Add element to fitBitData object
fitBitData["Name"] = "sazzad";
console.log(fitBitData);

// another way
fitBitData.age = 26;
console.log(fitBitData);

// Access age
console.log(fitBitData.age);

// nasted object
//..............

const student = {
  firstName: "Sazzad",
  lastName: "Tomal",
  strengths: ["Music", "Art"],
  exams: {
    midterm: 99,
    final: 96,
  },
};

const avg = student.exams.midterm + student.exams.final;
console.log(avg);

const accesObjArray = student.strengths[1];
console.log(accesObjArray);

// object property in array

const shoppingCart = [
  {
    product: "jenga Classic",
    price: 6.88,
    quantity: 1,
  },
  {
    product: "Echo Dot",
    price: 29.99,
    quantity: 3,
  },
  {
    product: "Fire Stick",
    price: 39.99,
    quantity: 2,
  },
];

const shoppingCartPropertyAccess = shoppingCart[0].quantity;
console.log(shoppingCartPropertyAccess);

const game = {
  player1: {
    userName: "Blue",
    playingAs: "x",
  },
  player2: {
    userName: "Muffins",
    playingAs: "0",
  },
  board: [
    ["o", null, "x"],
    ["x", "o", "x"],
    [null, "0", "x"],
  ],
};

const gamePlayersAccess = game.player1.userName;
console.log(gamePlayersAccess);

const gameBoardPropertyAccess = game.board[0][2];
console.log(gameBoardPropertyAccess);

//................................................

const palette = {
  red: "#eb4d4b",
  yellow: "#f9ca24",
  blue: "#30336b",
};

palette.green = "#Ebf876";
console.log(palette);

const palette2 = palette;
console.log(palette2);

palette2.darkBlue = "dark Blue";
console.log(palette2);
