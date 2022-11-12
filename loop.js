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

// 7 er 2 ses 3 start
