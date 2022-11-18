const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i <= number.length; i++) {
  console.log(i + 2);
}

for (let i = 1; i <= 10; i += 2) {
  console.log("HELLO:", i);
}

for (let i = 1; i <= 10; i++) {
  console.log(`${i}x${i} = ${i * i}`);
}

for (let i = 200; i >= 0; i -= 25) {
  console.log(i);
}

console.log("------------ Array with Loop -------------");

const animals = ["lions", "tigers", "bears"];
for (let i = 0; i < animals.length; i++) {
  console.log(`// ${i} '${animals[i]}' `);
}

const examScores = [98, 77, 84, 91, 57, 66];

for (let i = 0; i < examScores.length; i++) {
  console.log(`${i}. ${examScores[i]}`);
}

const myStudents = [
  {
    firstName: "Zeus",
    grade: 86,
  },

  {
    firstName: "Artemis",
    grade: 97,
  },
  {
    firstName: "Hera",
    grade: 72,
  },
  {
    firstName: "Apollo",
    grade: 90,
  },
];

for (let i = 0; i < myStudents.length; i++) {
  let students = myStudents[i];
  // console.log(students);
  console.log(`${students.firstName} Scored ${students.grade}`);
}

let total = 0;
for (let i = 0; i < myStudents.length; i++) {
  let students = myStudents[i];
  // console.log(students);
  console.log(`${students.firstName} Scored ${students.grade}`);
  total = total + students.grade;
}
console.log(total);

const word = "stressed";
let revorseWord = "";
for (let i = word.length - 1; i >= 0; i--) {
  revorseWord = revorseWord + word[i];
}

console.log(revorseWord);

console.log("-------- Nested Loops ---------");

let str = "LOL";
for (let i = 0; i <= 4; i++) {
  console.log("Outer", i);
  for (let index = 0; index < str.length; index++) {
    console.log("  Inner:", str[index]);
  }
}

const gameBoard = [
  [4, 43, 56, 66],
  [43, 64, 8, 43],
  [3, 32, 16, 4],
  [3, 4, 5, 6],
];

// for (let i = 0; i < gameBoard.length; i++) {
//   let row = gameBoard[i];
//   console.log(row);

//   for (let inx = 0; inx < row.length; inx++) {
//     console.log(row[inx]);
//   }
// }
let total1 = 0;
for (let i = 0; i < gameBoard.length; i++) {
  let row = gameBoard[i];

  for (let inx = 0; inx < row.length; inx++) {
    total1 = total1 + row[i];
  }
}
console.log(total1);

let n = 5;
for (let i = 1; i <= 5; i++) {
  let result = "";
  // console.log(i);
  for (let inx = 1; inx <= i; inx++) {
    result = result + inx + " ";
  }
  console.log(result);
}
console.log("-------- practice -----------");
for (let i = 1; i <= 5; i++) {
  let result = "";
  for (let inx = 1; inx <= i; inx++) {
    result += inx + " ";
  }

  console.log(result);
}

console.log("---- Nadted loop with *** ----");

for (let i = 1; i <= 10; i++) {
  let star = "";
  for (let indx = 1; indx <= i; indx++) {
    star += "*";
  }
  console.log(star);
}

for (let i = 1; i <= 5; i++) {
  let dollers = "";
  for (let ind = 1; ind <= i; ind++) {
    dollers += "$$";
  }
  console.log(dollers);
}

let number1 = 10;
for (let i = 1; i <= number1; i++) {
  let result = "";
  for (let ind = 1; ind <= i; ind++) {
    result += "$&*";
  }
  console.log(result);
}

for (let i = 10; i <= 50; i++) {
  console.log(i);

  if (i === 30) {
    break;
  }
}

const friends = ["Solim", "Saidee", "Sagor", "Shojib"];

for (let i = 0; i < friends.length; i++) {
  console.log(friends[i]);
}

for (fri of friends) {
  console.log(fri);
}

const magicSquare = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8],
];

for (let i = 0; i < magicSquare.length; i++) {
  let row = magicSquare[i];
  let sum = 0;
  for (let inXxx = 0; inXxx < row.length; inXxx++) {
    sum += row[inXxx];
  }
  console.log(`${row} summed to ${sum}`);
}

console.log("----- for of loop ------");

for (row of magicSquare) {
  let sum = 0;
  for (num of row) {
    sum += num;
  }
  console.log(`${row} summed to ${sum}`);
}

const movieReviews = {
  arival: 9.5,
  alien: 3.4,
  amelie: 9,
  "In Bruges": 5,
  amadeus: 10,
  "Kill Bill": 9,
  "Little miss Sunshine": 3.4,
  coraline: 8.5,
};

for (let movie of Object.keys(movieReviews)) {
  console.log(movie, movieReviews[movie]);
  // console.log(movie);
}
// 7 number ses 8 start

const persone = {
  name: "Sazzad",
  age: 26,
};

// console.log(Object.keys(persone).length);
console.log(persone.size);
