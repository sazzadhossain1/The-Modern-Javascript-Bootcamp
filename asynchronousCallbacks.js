setTimeout(function () {
  console.log("I HAPPEN THIRD");
}, 3000);

//////////////////////////////////////////////
/////////////////////////////////////////////
////////////////////////////////////////////

console.log("---------- Call Back Hell ------------");

const btn = document.querySelector("button");

// setTimeout(() => {
//   btn.style.transform = `translateX(100px)`;
//   setTimeout(() => {
//     btn.style.transform = `translateX(200px)`;
//     setTimeout(() => {
//       btn.style.transform = `translateX(300px)`;
//       setTimeout(() => {
//         btn.style.transform = `translateX(400px)`;
//         setTimeout(() => {
//           btn.style.transform = `translateX(500px)`;
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

const movex = (element, amount, delay, callBack) => {
  setTimeout(() => {
    element.style.transform = `translateX${amount}px`;
    if (callBack) callBack();
  }, delay);
};
movex(btn, 100, 1000, () => {
  movex(btn, 200, 1000);
});

// 16 number er 5 number ta ses 6 number ta start
