// axios
//   .get("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => console.log(res.data))
//   .catch((err) => {
//     console.log(err);
//   });

// function getData() {
//   const data = axios
//     .get("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => {
//       console.log(res);
//     });
//   console.log(data);
// }

// getData();
//////////////////////////////////////////
/////////////////////////////////////////
////////////////////////////////////////

async function greet() {
  return "HELLO!!!";
}
greet().then((val) => {
  console.log("PROMISE RESOLVED WITH", val);
});

async function add(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw "X and Y must be numbers";
  }
  return x + y;
}
