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

const h1 = document.querySelector("h1");
const changeColor = function (e) {
  console.log(e);
  h1.style.color = this.style.backgroundColor;
};

const constainer = document.querySelector("#boxes");

for (let color of colors) {
  const box = document.createElement("div");
  constainer.appendChild(box);
  box.classList.add("box");
  box.style.backgroundColor = color;
  box.addEventListener("click", changeColor);
}

// document.body.addEventListener("keypress", function (e) {
//   console.log(e);
// });

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

const getinput = document.querySelector("#addItem");
const getUl = document.querySelector("#items");

getinput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const getInputText = this.value;
    const createLi = document.createElement("li");
    createLi.innerText = getInputText;
    getUl.appendChild(createLi);
    this.value = "";
  }
});
// 15 number er 6 number ta ses 7  number ta start
