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
// 10 number er 10 number ses 11 number start
