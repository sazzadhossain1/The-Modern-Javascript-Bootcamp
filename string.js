const str = "sazzad";
console.log(str);

// const str1 = " ha ha ha '; // it will not work
//Right way//
const str1 = "ha ha ha";
console.log(str1);

const firstName = "Sazzad";
const lastName = "Tomal";

const name = firstName + " " + lastName;
console.log(name);

const nameLength = name.length;
console.log(nameLength);

const text = "It's only mine";
console.log(text);

const upercase = text.toUpperCase();
console.log(upercase);

const lowerCase = upercase.toLocaleLowerCase();
console.log(lowerCase);

const color = "purple                 ";
color.trim().toUpperCase();
console.log(color);

console.log("------------ Start (indexOf) --------------");

const a = "baseball".indexOf("ball");
const b = "baseball".indexOf("b");
const c = "Baseball".indexOf("b");
const d = "baseball".indexOf("base");
const e = "baseball".indexOf("e");
const f = "baseball".indexOf("dfdfdfdf");
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);

console.log("------------ Start slice method --------------");

let string = "superhero";
let slice = string.slice(0, 5);
console.log(slice);
console.log("superhero".slice(0, 5));

const nameSlice = "sazzadHossain";
const getFirstName = nameSlice.slice(0, 5);
console.log(getFirstName);

const getLastName = nameSlice.slice(6, 13).toUpperCase().slice(0, 1);
console.log(getLastName);

const getLastNameLetter = nameSlice.slice(6, 13).slice(1, 6);
console.log(getLastNameLetter);

const addNameLetter = getLastName + getLastNameLetter;
console.log(addNameLetter);

//...................................

const superhero = "superhero";
const he = superhero.slice(5, 7);
console.log(he);
// 3 er 5 ses 6start //
