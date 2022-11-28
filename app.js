const p = document.getElementById("main");
console.dir(p);

const inp = document.getElementsByTagName("input");
console.log(inp, inp.length);

for (let ip of inp) {
  console.log(ip);
}

const arr = [...inp];
console.log(arr);

for (let i = 0; i < inp.length; i++) {
  console.log(inp[i]);
}

const don = document.querySelectorAll(".pp");
console.log(don);

console.log("--------- dom practice ----------");

for (let dn of don) {
  dn.addEventListener("click", function () {
    dn.style.color = "orange";
    console.log(dn);
  });
}

const getTag = document.getElementsByTagName("li");
console.log(getTag);

console.log("---------- querySelectorA ---------");

const hOne = document.querySelector("h1");
console.log(hOne);

const paragraph = document.querySelectorAll("p");
console.log(paragraph);

const inputFill = document.querySelectorAll("input");
console.log(inputFill);

const ulTags = document.querySelector("ul");
console.log(ulTags);

const litags = document.querySelector("li");
console.log(litags);

const allLiTags = document.querySelectorAll("li");
console.log(allLiTags);

const getImg = document.querySelector("img");
console.log(getImg);

const getOneLiTag = document.querySelector("body section ul li.special");
console.log(getOneLiTag);

getImg.addEventListener("mouseover", function () {
  this.style.width = "600px";
  getImg.style.borderRadius = "50px";
});

getImg.addEventListener("mouseout", () => {
  getImg.style.width = "300px";
  getImg.style.borderRadius = "";
});

const h1Change = (hOne.innerText = " My First Damy Practice Website");

console.log(hOne.innerText);
console.log(document.body.innerText);
console.log(document.body.innerHTML);

const pMain = document.querySelector("#main");
console.log(pMain);

const getBTag = document.querySelector("b");
console.log(getBTag);

const getButton = document.querySelector(".btn-1");
console.log(getButton);

const getBtn = document.querySelector(".btn");
// pMain.addEventListener("mouseover", () => {
//   getBTag.style.display = "block";
// });

// pMain.addEventListener("mouseout", () => {
//   getBTag.style.display = "none";
// });

// getButton.addEventListener("click", function () {
//   getBTag.style.display = "block";
// });
getButton.addEventListener("click", function () {
  getBTag.style.display = "block";
  getButton.style.display = "none";
  getBtn.style.display = "block";
});

getBtn.addEventListener("click", function () {
  getBtn.style.display = "none";
  getButton.style.display = "block";
  getBTag.style.display = "none";
});

// 14 number er 0 number ta ses 1 number ta start
