let movies = [
  "The ?Fantastic Mr. Fox",
  "Mr. and Mrs. Smith",
  "Mrs. Doubtfire",
  "Mr. Deeds",
];

const movie = movies.find((mov) => {
  return mov.includes("Mrs");
});

console.log(movie);

const movie1 = movies.find((m) => {
  return m.indexOf("Mrs") === 0;
});
console.log(movie1);

const movie2 = movies.find((mov) => {
  return mov.includes("Mr");
});

console.log(movie2);

const movie3 = movies.find((mov) => {
  return mov.indexOf("Mr") === 0;
});

console.log(movie3);

//................................................

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

// const goodBook = books.find(function (b) {
//   return b.title >= 4.3;
// });
// const neilBook = books.find((b) => {
//   b.authors.includes("Neil Gaiman");
// });

// console.log(neilBook);

console.log("-------------- filter -----------");

const number = [34, 35, 67, 54, 109, 102, 32, 9];

const odds = number.filter(function (n) {
  return n % 2 === 1;
});
console.log(odds);

const evens = number.filter(function (n) {
  return n % 2 === 0;
});

console.log(evens);

const bigNumbers = number.filter(function (n) {
  return n > 50;
});

console.log(bigNumbers);

//................................................

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

const goodBook = books1.filter(function (b) {
  return b.rating > 4.3;
});

console.log(goodBook);

// const fantasyBook = books1.filter((book) => {
//   book.genres.includes("fantasy");
// });
// console.log(fantasyBook);

// const shortForm = books1.filter((b) => {
//   return b.genres.includes("short stories") || b.genres.includes("essays");
// });

// console.log(shortForm);
console.log("----------- xxxxx ----------");
const query = "The";
const results = books1.filter((book) => {
  const title = book.title.toLowerCase();
  return title.includes(query.toLowerCase());
});

console.log(results);

console.log("-------- Every and Some Method --------");

const words = ["dog", "dig", "log", "bag", "wag"];

const all3Lets = words.every((word) => {
  return word.length === 3;
});
console.log(all3Lets);

const allEndInG = words.every((word) => {
  const last = word.length - 1;
  return word[last] === "g";
});

console.log(allEndInG);

const someStartWith = words.some((word) => word[0] === "d");
console.log(someStartWith);

const everyStartWith = words.every(function (word) {
  word[0] === "d";
});
console.log(everyStartWith);

const allGoodsBooks = books.every(function (book) {
  return book.rating > 3.5;
});
console.log(allGoodsBooks);

console.log("------ Books1 ------");

const allBooksTitle = books1.every(function (boo) {
  return boo.title;
});
console.log(allBooksTitle);

const titleValue = books1.some(function (b) {
  return b.title === "The Way of King";
});

console.log(titleValue);

const any2Authors = books1.some(function (book) {
  return book.authors.length === 2;
});

console.log(any2Authors);
