// let myPromise = new Promise((resolveFunc, rejectFunc) => {
//   let result = 2;
//   if (result == 2) {
//     resolveFunc("Success");
//   } else {
//     rejectFunc("Failed");
//   }
// });
// // myPromise.then((msg) => {
// //   console.log(msg);
// // });

// // myPromise.catch((err) => {
// //   console.log(err);
// // });

// myPromise
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((err) => console.log(err));

// const myPromise = new Promise((resolveFunc, rejectFunc) => {
//   let result = 5;
//   if (result == 2) {
//     resolveFunc("Success");
//   } else {
//     rejectFunc("Failed");
//   }
// });

// myPromise.then((msg) => console.log(msg)).catch((err) => console.log(err));

console.log("--------- Main Course Part -----------");

// const makeDogPromise = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const rand = Math.random();
//       if (rand < 0.5) {
//         resolve();
//       } else {
//         reject();
//       }
//     }, 5000);
//   });
// };

// makeDogPromise()
//   .then(() => console.log("Yes we got a dog"))
//   .catch((err) => console.log("No dog"));

// const fakeRequest = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const rand = Math.random();
//       if (rand < 0.3) {
//         reject("REQUEST WORKED!");
//       } else {
//         resolve("REQUEST FAILED");
//       }
//     }, 3000);
//   });
// };
// fakeRequest()
//   .then((mas) => {
//     console.log(mas);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//////////////////////////////////////////////
console.log("------------ XMLHttpRequest --------------");

// const firstReq = new XMLHttpRequest();
// firstReq.addEventListener("load", () => {
//   console.log("It Worked!!!");
// });
// firstReq.addEventListener("error", () => {
//   console.log("ERROR!!!!!!!!!");
// });

// firstReq.open("GET", "https://jsonplaceholder.typicode.com/posts");
// firstReq.send();
// console.log("Request Sent");

// const firstReq = new XMLHttpRequest();
// firstReq.addEventListener("load", () => {
//   console.log("IT WORKED!!!!!!");
//   const data = JSON.parse(firstReq.responseText);
//   console.log(data);
// });
// firstReq.addEventListener("error", () => {
//   console.log("ERROR!!!!!!");
// });

// firstReq.open("GET", "https://jsonplaceholder.typicode.com/posts");
// firstReq.send();
// console.log("Request Sent!");
// console.log(fakeRequest);

console.log("----------- Fetch ------------");

///////////////////////////////////////////////////////////////

// const getBodyl = document.querySelector("body");

// function getData() {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((res) => loadData(res));
// }
// getData();

// function loadData(data) {
//   for (let da of data) {
//     console.log(da);
//     const getDiv = document.querySelector(".card");
//     getDiv.innerHTML += `<img src="..." class="card-img-top" alt="..." />
//     <div class="card-body">
//       <h5 class="card-title">${da.name}</h5>
//       <p class="card-text">
//         ${da.company.bs}
//         ${da.company.bs}
//         ${da.company.bs}
//       </p>
//       <a href="#" class="btn btn-primary">Go somewhere</a>
//     </div>`;
//   }
// }

function fetchUser() {
  fetch("https://randomuser.me/api/?results=50")
    .then((res) => res.json())
    .then((data) => {
      displayUser(data);
    });
}

fetchUser();
function displayUser(data) {
  const users = data.results;
  for (let user of users) {
    console.log(user);
    const getUser = document.querySelector("#user");
    getUser.innerHTML += `<div class="card" style="width: 18rem;">
    <img src=${user.picture.large} class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${user.name.title} ${user.name.first} ${user.name.last}</h5>
      <p class="card-text">Email: ${user.email}</p>
      <p class="card-text">Phone No: ${user.phone}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`;
  }
}

// 18 number er 1 number ta ses 2  number ta start
