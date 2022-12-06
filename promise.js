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

const myPromise = new Promise((resolveFunc, rejectFunc) => {
  let result = 5;
  if (result == 2) {
    resolveFunc("Success");
  } else {
    rejectFunc("Failed");
  }
});

myPromise.then((msg) => console.log(msg)).catch((err) => console.log(err));
