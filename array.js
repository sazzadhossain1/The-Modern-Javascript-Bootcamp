const shoppingList = ["cereal", "cheese", "ice"];
const lotto = [33, 44, 22, 23, 43];
const myCollection = [12, "dog", true, null, NaN];
console.log(myCollection);

const colors = ["red", "orange", "yellow", "green"];
console.log(colors[1]);

const shoppingList1 = ["cheddar cheese", "2% mili"];
shoppingList1[1] = "Whole milk";
console.log(shoppingList1);
shoppingList1[2] = "Ice Cream";
console.log(shoppingList1);
console.log(shoppingList1[2]);

console.log("---- push and pop ----");

const topSongs = [
  "First Time Ever I saw your face",
  "Allah only knows",
  "A day In the life",
  "Life On mars",
];

topSongs.push("Sura mulk is the best ");
topSongs.unshift("Im a Web Developer");

topSongs.pop();
topSongs.shift();
console.log(topSongs);

console.log("------- concat -------");

const fruits = ["Apple", "Orange"];
const veggies = ["Asparagus", "Brussel", "Sprouts"];

const fruitsAndVeggies = fruits.concat(veggies);

const drinks = ["AppleJuse", "OrangeJuice"];

const fruitsAndVeggiesAndDrinks = [...fruitsAndVeggies.concat(drinks)];
console.log(fruitsAndVeggiesAndDrinks);

console.log("------------------- inclides ------------------");

console.log(fruitsAndVeggiesAndDrinks.includes("OrangeJuice"));
console.log(fruitsAndVeggiesAndDrinks.includes("komolaJuice"));

console.log(fruits.includes("Apple"));
console.log(veggies.includes("Brussel", 1));
console.log(veggies.includes("Brussel", 5));

console.log("------------- indexOf --------------");

console.log(fruits.indexOf("Apple"));
console.log(fruits.indexOf("Orange"));
console.log(fruitsAndVeggiesAndDrinks.indexOf("Brussel"));

console.log(fruits.indexOf("komola"));
console.log(fruitsAndVeggies.indexOf("puishak"));
console.log(fruitsAndVeggiesAndDrinks.indexOf("gendarir shorbot"));

if (fruits.includes("Apple") && fruits[0] === "Apple") {
  console.log("Give me a glass of Apple juice");
} else {
  console.log("No thanks Brow");
}

//---------------------------------------------------------------

if (fruits.includes("Orange") && fruits.indexOf("Orange") !== -1) {
  console.log("This is orange juice");
} else {
  console.log("This is not orange juice");
}
let letters = ["a", " b", "c", "d", "e", "f"];
let le = letters.reverse().join("-").toUpperCase();

console.log(le);
console.log(typeof le);

const animals = ["shark", "salmon", "whale", "bear", "lizard", "tortoise"];

// const swimmers = animals.slice(0, 3);
// console.log(swimmers);

// const mammals = animals.slice(2, 4);
// console.log(mammals);

// animals.splice(1, 0, "Octopus");

animals.splice(3, 1, 10);
console.log(animals);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.splice(3, 3, 1111, 22222, 33333, 44444, 55555);
console.log(numbers);

console.log("---------- sorting Method ----------");

const listOfNumber = [33, 22, 55, 11, 66, 55, 77];
// const sortingArray = listOfNumber.sort();
// console.log(sortingArray);

listOfNumber.sort(function (a, b) {
  return a - b;
});
console.log(listOfNumber);
console.log("-------------- Nasted Araray --------------");

const arr = [
  11,
  33,
  22,
  ["Sazzad", " Hossain"],
  [66, 77, "Tomal"],
  "Sazzad is web developer",
];

// const createName = arr[3] + " " + arr[4][2];
const createName = arr[3].join(" ") + " " + arr[4][2];

console.log(createName);
