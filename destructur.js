const receResults = [
  "Eliud Kipchoge",
  "Feyisa Lelisa",
  "Galen Rupp",
  "ghirmay Ghebreslassie",
  "Alphonce Simbu",
  "Jared Ward",
];

// const gold = receResults[0];
// const silver = receResults[1];
// const bronze = receResults[2];
// console.log(gold);

const [gold, silver, bronze] = receResults;
console.log(gold);
console.log(silver);
console.log(bronze);

console.log("------- Esc and destructure -------");

const [first, , third, , , last] = receResults;
console.log(first, third, last);

console.log("------- Rest Peramiter --------");

const [winner, ...other] = receResults;
console.log(winner);
console.log(other);

//.................................................
//-------------------------------------------------
//.................................................

console.log("---------- Object Destructuring ----------");

const runner = {
  first1: "Eliud",
  last1: "Kipchoge",
  country: "Kenya",
  title: "Elder of the Order of the Golden Heart of Kenya",
};

// const { first1, last1 } = runner;
// console.log(first1);
// console.log(last1);

// const { first1, ...other1 } = runner;

// console.log(first1);
// console.log(other1);

const { first1, title } = runner;
console.log(first1);
console.log(title);

console.log("-------- Nested Destructuring --------");

const results = [
  {
    first2: "Eliud",
    last2: "Kipchoge",
    country: "Kenya",
  },
  {
    first2: "Feyisa",
    last2: "Lilesa",
    country: "Ethiopia",
  },
  {
    first2: "Galen",
    last2: "Rupp",
    country: "United States",
  },
];

const [, , { first2, last2, country }] = results;
console.log(first2);
console.log(last2);
console.log(country);

const [{ first2: fir }, { first2: fi }, { first2: f }] = results;
console.log(fir);
console.log(fi);
console.log(f);

const [{ country: kenya }, { country: Ethiopia }, { country: United }] =
  results;

console.log(kenya);
console.log(Ethiopia);
console.log(United);

const print = (person) => {
  const { first1, last1, country, title } = person;
  console.log(`${first1} ${last1} ${country} ${title}`);
};
print(runner);

//...........................................................

const response = ["HTTP/1.1", "200 Ok", "application/json"];

function parseResponse([protocol, statusCode, contentType]) {
  console.log(`Status: ${protocol} ${statusCode} ${contentType}`);
}
parseResponse(response);

// 11 number ta ses
