// Example 1
if (1 === 1) {
  console.log("you are the number 1 ");
} else {
  console.log("You are not number 1");
}

// Example 2
let rating = 3;
if (rating === 3) {
  console.log("rating is three");
} else {
  console.log("rating is false");
}

if (rating === 2) {
  console.log("rating is three");
} else {
  console.log("rating is false");
}

// Example 3
let num = 37;
if (num % 2 !== 0) {
  console.log("ODD NUMBER!");
} else {
  console.log("NOT ODD NUMBER");
}

if (num % 2 === 0) {
  console.log("ODD NUMBER!");
} else {
  console.log("NOT ODD NUMBER");
}

// Example 4
// const sazzad = "Web Developer";
const sazzad = "learner";
if (sazzad === "Web Developer") {
  console.log("Give the job");
} else if (sazzad === "learner") {
  console.log("sazzad's need to learn very well");
} else {
  console.log("sazzad's profesion is other");
}

const password = "hello kitty";

if (password.length >= 6) {
  if (password.indexOf(" ") === -1) {
    console.log("Valid Password");
  } else {
    console.log("Password is long enough, but cannot contain spaces");
  }
} else {
  console.log("passward must be longer");
}

//.........................................

// let mystery = false;
let mystery = true;

if (mystery) {
  console.log("my stery is truthy");
} else {
  console.log("my stery is falsy");
}

// let loggedInUser = "tomal993";
// let loggedInUser = " ";
// let loggedInUser = null;
let loggedInUser = NaN;

if (loggedInUser) {
  console.log("You are logged in");
} else {
  console.log("Please log in");
}

console.log("------ && and || oprator ------");

let userName = "Ssazzad";
let passward = 1111;

let email = "sazzadTomal1@gmail.com";

if (
  (userName === "Sazzad" && passward === 1111) ||
  (email === "sazzadTomal1@gmail.com" && passward === 1111)
) {
  console.log("Welcome to home");
} else {
  console.log("Please sign up");
}

let age = 76;
if (age < 6 || age >= 65) {
  console.log("You get in for free!");
} else {
  console.log("That will be $10 please");
}

const pass = 2222;
if (pass !== 1111 && pass === 2222) {
  console.log("Welcome to home");
} else {
  console.log("currection your password");
}

let loggedInUser1;
if (!loggedInUser1) {
  console.log("GET OUT OF HERE!");
} else {
  console.log("You are loged in");
}
// 4 er  11 ses 12 start
