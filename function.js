function grumpus(a) {
  console.log("ugh... You again...");
  console.log("Leave me alone...");
  console.log("....For the last time...");
  console.log(a);
}

grumpus();
grumpus();
grumpus();

for (let i = 0; i <= 10; i++) {
  grumpus(4444444444444);
}

function rollDice() {
  let roll = Math.floor(Math.random() * 6) + 1;
  console.log(roll);
}

function throwDice() {
  rollDice();
  rollDice();
  rollDice();
  rollDice();
  rollDice();
}

throwDice();

const name1 = function (nickName) {
  console.log(`Hi ${nickName}`);
};
name1("Sazzad");

//.........................

function square(num) {
  console.log(num * num);
}
square(4);

//.........................

function sum(x, y) {
  console.log(x + y);
}
sum(10, 20);

//..........................

const divided = (a, b) => {
  return a / b;
};
console.log(divided(10, 2));

//.....................................

function isPurple(color) {
  if (color.toLowerCase() === "purple") {
    return true;
  } else {
    return false;
  }
}

console.log(isPurple("purple"));

//..........................................
const color = ["blue", "pink", "bagenta"];
function containsPurple(array) {
  for (arr of array) {
    if (color === "blue" || color === "pink") {
      return true;
    } else {
      return false;
    }
  }
}
containsPurple(color);

//...................................

function isValidPassword(password, userName) {
  if (password.length < 8) {
    return false;
  }
  if (password.indexOf(" ") !== -1) {
    return false;
  }
  if (password.indexOf(userName) !== -1) {
    return false;
  }
  return true;
}
console.log(isValidPassword("dfdfdf434343434", "sazzad"));
console.log(isValidPassword("dfd", "sazzad"));

//.........................................

function isValidPassword(password, userName) {
  if (
    password.length < 8 ||
    password.indexOf(" ") !== -1 ||
    password.indexOf(userName) !== -1
  ) {
    return false;
  }
  return true;
}
console.log(isValidPassword("dfdfdf434343434", "sazzad"));
console.log(isValidPassword("dfd", "sazzad"));

console.log("---------- Next Function Challange ---------");

function avg(...arr) {
  let total = 0;
  for (let num of arr) {
    total += num;
  }
  return total / arr.length;
}
console.log(avg(12, 11, 23, 33));
console.log(avg(23, 108));

console.log("------- Next another function challange ------");

const isPangram = (sentence) => {
  let toUpperCase = sentence.toUpperCase();
  for (let char of "SKDFJKSADFKLSADF") {
    if (toUpperCase.indexOf(char) === -1) {
      return false;
    }
    return true;
  }
};

console.log(isPangram("ZQXZQQQZXS"));

//.............................................
const isPangram1 = (sentence) => {
  let toUpperCase = sentence.toUpperCase();
  for (let char of "SKDFJKSADFKLSADF") {
    if (!toUpperCase.includes(char)) {
      return false;
    }
    return true;
  }
};

console.log(isPangram1("qzqxmnlpo"));

//........................................

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
    "a",
    "a",
  ];
  const idx = Math.floor(Math.random() * values.length);
  console.log(idx);
}
getCard();

function lol() {
  let person = "Tom";
  const age = 45;
  var color1 = "teal";
  console.log(person, age, color1);
}
lol();

//.......................................

function doubleArr(arr) {
  const result = [];
  for (let num of arr) {
    let double = num * 2;
    result.push(double);
  }
  console.log(result);
  return result;
}
doubleArr([1, 2, 3]);

console.log("---------------------------");

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divided1(x, y) {
  return x / y;
}

const operation = [add, subtract, multiply, divided1];

// console.log(operation[0](10, 20));
// console.log(operation[1](10, 200));
// console.log(operation[2](300, 200));
// console.log(operation[3](400, 500));

for (let func of operation) {
  let result = func(30, 50);
  console.log(result);
}

const thing = {
  doSomething: multiply,
};

console.log(thing.doSomething(10, 2));

console.log("------------------- practice ---------------");

const addFun = (x, y) => {
  return x + y;
};

const minusFun = (x, y) => {
  return x - y;
};

const multiplyFun = (x, y) => {
  return x * y;
};

const dividedFun = (x, y) => {
  return x / y;
};

const allFunction = [addFun, minusFun, multiplyFun, dividedFun];
console.log(allFunction[0](5000, 10000));
console.log(allFunction[1](5000, 10000));
console.log(allFunction[2](5000, 10000));
console.log(allFunction[3](5000, 10000));

console.log("--------- for of loop ----------");
for (func of allFunction) {
  let f = func(12, 23);
  console.log(f);
}

const functionObject = {
  addFunction: addFun,
  minusFunction: minusFun,
  multiplyFunction: multiplyFun,
  dividedFunction: dividedFun,
};

console.log(functionObject.addFunction(10, 25));
console.log(functionObject.minusFunction(25, 15));
console.log(functionObject.multiplyFunction(25, 15));
console.log(functionObject.dividedFunction(20, 50));

// 9 number er 5 number ses 6 number start
