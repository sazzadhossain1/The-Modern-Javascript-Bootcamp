const numbers = [3, 4, 5, 6, 7];
const multipleNumbers = numbers.reduce((a, b) => {
  return a * b;
});
console.log(multipleNumbers);

const sumNumbers = numbers.reduce((a, b) => a + b);
console.log(sumNumbers);

const oddNumbers = numbers.reduce((a, b) => a - b);
console.log(oddNumbers);

const divisionNumbers = numbers.reduce((a, b) => a / b);
console.log(divisionNumbers);

//.......................................

const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];

const maxGrade = grades.reduce((max, currVal) => {
  if (currVal > max) {
    return currVal;
  } else {
    return max;
  }
});

console.log(maxGrade);

// max   || currVal   || return
// 87         64           87
// 87         96           96
// 96         92           96
// 96         88           96
// 96         99           99
// 99
//..............................

const maxGrade1 = grades.reduce((max, currVal) => {
  return Math.max(max, currVal);
});
console.log(maxGrade1);

const minGrade = grades.reduce((min, currVal) => Math.min(min, currVal));
console.log(minGrade);

const sumAganin = [10, 20, 30, 40, 50].reduce(
  (acc, currentValue) => acc + currentValue
);
console.log(sumAganin);

//.........................................

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

const results = votes.reduce((tally, val) => {
  if (tally[val]) {
    tally[val]++;
  } else {
    tally[val] = 1;
  }
  return tally;
}, {});

console.log(results);

//---------------------------------------------

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

// const groupeByRatings = books1.reduce((groupedBooks, book) => {
//   const key = Math.floor(book.rating);
//   if (!groupedBooks[key]) {
//     groupedBooks[key] = [];
//     groupedBooks[key].push(book);
//     return groupedBooks;
//   }
// }, {});

// console.log(groupeByRatings);

console.log("-------------Sumit Vai-------------");
const numbersArray = [10, 20, 30, 40, 50];

const sumNumbersArray = numbersArray.reduce((a, b) => {
  return a + b;
}, 0);
console.log(sumNumbersArray);

console.log("---------JS Bangladesh---------");

const number = [12, 25, 46, 27, 32, 2000];
const votes1 = ["Yes", "No", "Yes", "Yes", "Yes", "No", "Absent"];

const sumNum = number.reduce(function (acc, val) {
  return acc + val;
}, 100);

console.log(sumNum);

const max = number.reduce(function (acc, val) {
  if (acc > val) {
    return acc;
  } else {
    return val;
  }
}, 5000);
console.log(max);

const min = number.reduce(function (acc, val) {
  if (acc < val) {
    return acc;
  } else {
    return val;
  }
}, 5);

console.log(min);

//..... Another Way to find the max and min number .....

const maxNumber = number.reduce((acc, val) => {
  return Math.max(acc, val);
}, 3000);

console.log(maxNumber);

const minNumber = number.reduce((acc, val) => {
  return Math.min(acc, val);
}, 10);

console.log(minNumber);

const sumObjRating = books1.reduce((acc, val) => {
  // return acc + val.rating;
  const math = acc + val.rating;
  return Math.floor(math);
}, 0);
console.log(sumObjRating);

//.........................................

const result = votes1.reduce((acc, vot) => {
  if (acc[vot]) {
    acc[vot]++;
  } else {
    acc[vot] = 1;
  }
  return acc;
}, {});

console.log(result);

const result1 = votes.reduce(function (acc, vot) {
  if (acc[vot]) {
    acc[vot]++;
  } else {
    acc[vot] = 1;
  }
  return acc;
}, {});

console.log(result1);

// 10 number ses
