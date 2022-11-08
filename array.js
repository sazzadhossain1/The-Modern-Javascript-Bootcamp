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

// 5 er 4 ses 5 start
