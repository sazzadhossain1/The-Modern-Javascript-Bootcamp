for (let i = 1; i <= 10; i++) {
  let star = "";
  for (let indx = 1; indx <= i; indx++) {
    star += "*";
  }
  console.log(star);
}

for (let i = 1; i <= 10; i++) {
  let str = "";
  for (let index = 1; index <= i; index++) {
    str += index + " ";
  }
  console.log(str);
}

for (let i = 1; i <= 10; i++) {
  let str = "";
  for (let ix = 1; ix <= i; ix++) {
    str += "$*$" + " ";
  }
  console.log(str);
}

let name = "sazzad";
// console.log(name[0].toUpperCase());
console.log(name.replace(name[0], name[0].toUpperCase()));

const n = "sazzad";
console.log(n.replace(n[0], n[0].toUpperCase()));

const fullName = "sazzad hossain tomal";
console.log(
  fullName
    .replace(fullName[0], fullName[0].toUpperCase())
    .replace(fullName[7], fullName[7].toUpperCase())
    .replace(fullName[15], fullName[15].toUpperCase())
);
