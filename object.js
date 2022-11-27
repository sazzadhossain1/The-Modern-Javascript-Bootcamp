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

console.log("------- Shorthand object propertiles --------");

const getStats = (arr) => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const sum = arr.reduce((sum, r) => {
    return sum + r;
  });
  const avg = sum / arr.length;
  return {
    max: max,
    min: min,
    sum: sum,
    avg: avg,
  };
};

const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];
const stats = getStats(reviews);
console.log(stats);

console.log("------- another exemple --------");

function pick(arr) {
  const idx = Math.floor(Math.random()) * arr.length;
  return idx;
}
function getCard() {
  const values = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "j",
    "q",
    "k",
    "a",
  ];

  const suits = ["cluds", "spades", "hearts", "diamonds"];
  const value = pick(values);
  const suit = pick(suits);
  return {
    value: value,
    suit: suit,
  };
}

console.log(getCard());

console.log("-----------Computed Properties------------");

const role = "host";
const person = "jools holland";

const role2 = "Director";
const person2 = "James Cameron";

const team = {};
team[role] = person;
console.log(team);

const director = {};
director[role2] = person2;
console.log(director);

//............ (practice computed properties) ..............
const name = "yeasin";
const age = 4.5;

const object = {};
object[name] = age;
console.log(object);

//...........................

const team1 = {
  [role]: person,
  [role2]: person2,
  [1 + 6 + 9]: "sixteen",
};
console.log(team1);

function addProp(obj, k, v) {
  const copy = { ...obj };
  copy[k] = v;
  return copy;
}

const result = addProp(team1, "happy", ":)");
console.log(result);

// ///...........................................

const math = {
  numbers: [1, 2, 3, 4, 5],
  add(x, y) {
    return x + y;
  },
  multiply(x, y) {
    return x * y;
  },
};
console.log(math.add(1, 2));
console.log(math.multiply(1, 2));

const add = function (x, y) {
  return x + y;
};
console.log(add(10, 20));

const math1 = (n) => {
  return n + add(100, 200);
};

console.log(math1(50));

const mathObject = {
  numbers: [1, 2, 3, 4, 5, 6],
  add: function (x, y) {
    return x + y;
  },

  multiply: function (x, y) {
    return x * y;
  },
};

const getMathObjectPropertys = mathObject.add(5, 10);
console.log(getMathObjectPropertys);

const getMathObjectPropertys1 = mathObject.multiply(5, 10);
console.log(getMathObjectPropertys1);

// //...................................

const auth = {
  userName: "Sazzad Hossain",
  login() {
    console.log("You are login");
  },
  logout() {
    console.log("Good Buy");
  },
};

auth.login();
auth.logout();

console.log("------------- this key word -------------");

const person1 = {
  first: "Sazzad",
  last: "Hossain",
  nickName: "Tomal",
  fullName() {
    // aikhane first, last, and nickName ke (distructure) korechi
    const { first, last, nickName } = this;
    return first + " " + last + " " + nickName;
  },
  printBio() {
    const fullNm = this.fullName();
    return `${fullNm} is my full name`;
  },

  laugh() {
    const { nickName } = this;
    return `${nickName} you will do it IN SHAA ALLAH`;
  },
};

console.log(person1.fullName().toUpperCase());
console.log(person1.printBio());

console.log(person1.laugh());

console.log("--------- Annoyomatic Demo -----------");

const annoyer = {
  phrases: [
    "literally",
    "cray cray",
    "i can't even",
    "Totes!",
    "YOLO",
    "Can't Stop, won't stop",
  ],
  pickPhrase() {
    const { phrases } = this;
    const idx = Math.floor(Math.random() * phrases.length);
    return phrases[idx];
  },

  colorFun() {
    const { phrases } = this;
    const inx = Math.floor(Math.random() * phrases.length);
    return phrases[inx];
  },

  start() {
    setInterval(() => {
      console.log("dfdfaskdjfklsajdkls");
    }, 3000);
  },
};

// console.log(annoyer.start());
console.log(annoyer.pickPhrase());
console.log(annoyer.colorFun());
// 12 number er 6 ses 7   number start
