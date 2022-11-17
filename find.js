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
// 10 number er 6 number ses 7 number start
