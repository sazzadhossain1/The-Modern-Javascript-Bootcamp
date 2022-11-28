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
// 13 number er 7 number ta ses 8 number ta start
