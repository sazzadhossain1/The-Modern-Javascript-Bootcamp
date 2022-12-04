const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "indigo",
  "violet",
];

// const h1 = document.querySelector("h1");
// const constainer = document.querySelector("#boxes");

// const changeColor = function (e) {
//   h1.style.color = this.style.backgroundColor;
// };

// for (let color of colors) {
//   const box = document.createElement("div");
//   constainer.appendChild(box);
//   box.classList.add("box");
//   box.style.backgroundColor = color;
//   box.addEventListener("click", changeColor);
// }

// document.body.addEventListener("keypress", function (e) {
//   console.log(e);
// });

console.log("------------- Practice ------------");

// const constainer = document.querySelector("#boxes");
// const h1 = document.querySelector("h1");

// for (let color of colors) {
//   const box = document.createElement("div");
//   constainer.appendChild(box);
//   box.classList.add("box");
//   box.style.backgroundColor = color;

//   box.addEventListener("mouseover", function (e) {
//     h1.style.color = box.style.backgroundColor;
//   });
// }

//...............................................

// const constainer = document.querySelector("#boxes");
// const h1 = document.querySelector("h1");

// function mouseoverFunction(e) {
//   h1.style.color = this.style.backgroundColor;
// }
// for (let color of colors) {
//   const div = document.createElement("div");
//   div.classList.add("box");
//   constainer.appendChild(div);
//   div.style.backgroundColor = color;
//   div.addEventListener("mouseover", mouseoverFunction);
// }

//................................................

const constainer = document.querySelector("#boxes");
const h1 = document.querySelector("h1");

function h1ColorChangeFunction(e) {
  h1.style.color = this.style.backgroundColor;
}
for (let color of colors) {
  const divBox = document.createElement("div");
  divBox.classList.add("box");
  divBox.style.backgroundColor = color;
  constainer.appendChild(divBox);

  divBox.addEventListener("click", h1ColorChangeFunction);
}
console.log("--------------xxxxxxx-------------");

// const addItemInput = document.querySelector("#addItem");
// const itemsUL = document.querySelector("#items");

// addItemInput.addEventListener("keypress", function (e) {
//   if (e.key === "Enter") {
//     const newItemText = this.value;
//     const newItem = document.createElement("li");
//     newItem.innerText = newItemText;
//     itemsUL.appendChild(newItem);
//     this.value = "";
//   }
// });

// const getinput = document.querySelector("#addItem");
// const getUl = document.querySelector("#items");

// getinput.addEventListener("keypress", function (e) {
//   if (e.key === "Enter") {
//     if (!this.value) {
//       alert("Please Wright Somthing");
//     }
//     const getInputText = this.value;
//     const createLi = document.createElement("li");
//     createLi.innerText = getInputText;
//     getUl.appendChild(createLi);
//     this.value = "";
//   }
// });

// const getinput = document.querySelector("#addItem");
// const getUl = document.querySelector("#items");
// getinput.addEventListener("keypress", function (e) {
//   if (e.key === "Enter") {
//     const getInputText = this.value;
//     const createLi = document.createElement("li");
//     createLi.innerText = getInputText;
//     getUl.appendChild(createLi);
//     this.value = "";
//   }
// });

//.................................................

// const getinput = document.querySelector("#addItem");
// const getUl = document.querySelector("#items");

// getinput.addEventListener("keypress", function (e) {
//   if (e.key === "Enter") {
//     const getInputText = this.value;

//     const createLi = document.createElement("li");
//     createLi.innerText = getInputText;
//     getUl.appendChild(createLi);
//     this.value = "";
//   }
// });

//.................................................

const getinput = document.querySelector("#addItem");
const getUl = document.querySelector("#items");

getinput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    if (!this.value) {
      alert("Please Wright Somthing");
    }
    const getInputText = this.value;
    const createLi = document.createElement("li");
    createLi.innerText = getInputText;
    getUl.appendChild(createLi);

    this.value = "";
  }
});
// 15 number er 7 number ta ses 8  number ta start
