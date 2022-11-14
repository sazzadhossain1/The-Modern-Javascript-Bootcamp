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

const name = function (nickName) {
  console.log(`Hi ${nickName}`);
};
name("Sazzad");
