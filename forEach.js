const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];
let n = [];
nums.forEach(function (num) {
  n.push(num * 2);
});
console.log(n);

//.....................................

function printTriple(n) {
  console.log(n * 10);
}

nums.forEach(printTriple);

function printDouble(x) {
  console.log(x * 2);
}

nums.forEach(printDouble);
//........................................

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

console.log("-------- For Each -------");
books.forEach(function (book) {
  console.log(book.title.toUpperCase());
});

console.log("-------- For of loop -------");
for (let book of books) {
  console.log(book.title.toUpperCase());
}

console.log("-------- Regular loop -------");
for (let i = 0; i < books.length; i++) {
  //   console.log(books[i].title.toUpperCase());
  //   console.log(books[i].title);

  if (
    books[i].title === "American Gods" ||
    books[i].title === "A Genteman in Moscow"
  ) {
    console.log(books[i].authors[0].toUpperCase());
  } else {
    console.log("Code not in the right way");
  }
}

nums.forEach(function (num, indx) {
  console.log(`${indx}. You are ${num}`);
});
