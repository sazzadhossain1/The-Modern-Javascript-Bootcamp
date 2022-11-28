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

const don = document.querySelectorAll("p");
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
// 13 number er 7 number ta ses 8 number ta start
