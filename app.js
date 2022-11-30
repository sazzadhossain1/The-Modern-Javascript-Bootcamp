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

const getInput = document.querySelectorAll("input");

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
  getBTag.style.color = "darkblue";
  getBTag.style.fontStyle = "italic";
  getBTag.style.fontSize = "30px";
});

getBtn.addEventListener("click", function () {
  getBtn.style.display = "none";
  getButton.style.display = "block";
  getBTag.style.display = "none";
});

console.log(getInput[0]);
console.log(getInput[1]);
console.log(getInput[2]);
console.log(getInput[3].value);
console.log(getInput[4]);

const allLi = document.querySelectorAll("li");
console.log(allLi[1].textContent);

// for (let i = 0; i < allLi.length; i++) {
//   allLi[i].innerText = "Change Li Text";
// }

// for (let li of allLi) {
//   li.innerHTML = "<b>Use For of Loop</b>";
// }

pMain.style.color = "red";
pMain.style.backgroundColor = "black";

const colors = ["red", "green", "ornage", "blue", "purple", "pink"];

allLi.forEach(function (li, i) {
  const color = colors[i];
  li.style.color = color;
});

for (let i = 0; i < allLi.length; i++) {
  const color = colors;

  allLi[i].style.color = color[i];
  console.log(allLi[i], color[i]);
}

//............................................

const todo = document.querySelector("#todos .todo");
console.log(todo);

// todo.style.color = "gray";
// todo.style.textDecoration = "line-through";
// todo.style.opacity = "50%";

todo.setAttribute("class", "done");
todo.classList.remove("done");

//.............................................

const newH2 = document.createElement("h2");

newH2.innerHTML = "I like Animals";
newH2.classList.add("special");
console.log(newH2);

const getSection = document.querySelector("section");
console.log(getSection);
getSection.appendChild(newH2);

const newImg = document.createElement("img");
console.log(newImg);
newImg.src =
  "https://i0.wp.com/blog.pettravel.com/wp-content/uploads/2019/11/michael-hardy-hLbi5hve5Yc-unsplash.jpg?resize=940%2C627&ssl=1";

const getBody = document.querySelector("body");
console.log(getBody);

getBody.appendChild(newImg);

newImg.style.width = "700px";
newImg.style.borderRadius = "50px";

const brTag = document.createElement("br");
getBody.appendChild(brTag);

const newALink = document.createElement("a");
newALink.innerText = "Youtube Channel Link";
newALink.href = "https://www.youtube.com/watch?v=oRDRfikj2z8";
newALink.target = "blank";
console.log(newALink);

getBody.appendChild(newALink);
