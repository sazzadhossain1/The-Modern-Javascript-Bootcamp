const prices = [400.5, 3000, 99.99, 35.99, 12.0, 9500];

const ascSort = prices.slice().sort((a, b) => {
  return a - b;
});
console.log(ascSort);

const descSort = prices.slice().sort((a, b) => {
  return b - a;
});
console.log(descSort);

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

const sortBook = books1.sort(function (a, b) {
  return a.rating - b.rating;
});

const sortBooksAgain = books1.sort((a, b) => b.rating - a.rating);
console.log(sortBooksAgain);

const sortTitle = books1[1].genres.sort();
console.log(sortTitle);

const persone = ["sazzad", "hossain", "tomal", "shayla", "akther"];
console.log(persone.sort());

console.log("-------xxxxx-------");
const booksRatingSort = books1.sort((a, b) => {
  return a - b;
});

console.log(booksRatingSort);
// console.log(Object.keys(books1[0]).length);
