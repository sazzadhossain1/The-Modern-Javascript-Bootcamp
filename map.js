const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
const words = ["asap", "byob", "rsvp", "diy"];

const doubles = numbers.map(function (num) {
  return num * 2;
});

console.log(doubles);

const numDetail = numbers.map(function (n) {
  return {
    value: n,
    isEven: n % 2 === 0,
  };
});

console.log(numDetail);

const doubles2 = [];
for (let num of numbers) {
  doubles2.push(num * 5);
}
console.log(doubles2);

words.map(function (wo) {
  if (wo === "asap") {
    console.log("Asap is here");
  } else {
    console.log(wo);
  }
});
