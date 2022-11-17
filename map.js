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

console.log("------------------");

words.map(function (word) {
  console.log(word.toUpperCase().split("").join("."));
});

console.log("-----------------------");

const books = [
  {
    title: "Good Omens",
    authors: ["Terry pratchett", "Neil Gaiman"],
    rating: 4.25,
  },
  {
    title: "Bone: The Complete Edition",
    authors: ["jeff Smith"],
    rating: 4.42,
  },
  {
    title: "American Gods",
    authors: ["Neil Gaiman"],
    rating: 4.11,
  },
  {
    title: "A Genteman in Moscow",
    authors: ["Amor Towles"],
    rating: 4.36,
  },
];

books.map(function (book) {
  const author = book.authors[0].toUpperCase().split("").join(".");
  console.log(author);
});

const title = books.map(function (b) {
  return b.title;
});

console.log(title[0]);

const square = (x) => {
  return x * x;
};

console.log(square(4));

const isEven = (num) => {
  return num % 2 === 0;
};
console.log(isEven(4));
console.log(isEven(45));
