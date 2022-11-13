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
// 7 er 2 ses 3 start
