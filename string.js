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

console.log("<------------ Start (indexOf) -------------->");

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

console.log("<------------ Start slice method -------------->");

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

const doller = "$50 - $60";
const removeDellersSign = doller.slice(1);
console.log(removeDellersSign);

console.log("<------------ Start replace method -------------->");

const name1 = "sazzad hossain umok";
const replaceName = name1.replace("umok", "tomal").toUpperCase();
console.log(replaceName);

const sentence = "Baseball is entertaining";
const replaceSentence = sentence.replace("entertaining", "Ok");
console.log(replaceSentence);

console.log("------------- Strings Quiz ------------");

const age = "5" + "4";
console.log(age);
console.log("pecan pie"[7]);
console.log("PUP"[3]);

const song = "london calling".toUpperCase();

console.log(song);

let userInput = "   TODD@gmail.com";
let cleanedInput = userInput.trim().toLowerCase();
console.log(cleanedInput);

let park = "Yellowstone";
const index = park.indexOf("Stone"); // result -1
console.log(index);

const index1 = park.indexOf("Yellowstone"); // result - 0
console.log(index1);

const garbage = "GARBAGE";
const sliceAndReplace = garbage.slice(2).replace("B", "");
console.log(sliceAndReplace);

const myName = "      ballusazzad";
const currectionMyName = myName.trim().slice(5, -5).toUpperCase();

const sliceMyname = myName.trim().slice(6);

const currectName = currectionMyName + sliceMyname;
console.log(currectName);

const number = 3.1010101;
console.log(Math.floor(number));
console.log(Math.random(number));
console.log(Math.round(number));

const number1 = 3.66666;
console.log(Math.round(number1));

const ran = 500;

const m = Math.random(ran) * 100;
const mathFlore = Math.floor(m) + 1;
console.log(mathFlore);

// typeof
//.......

console.log(typeof "sazzad");
console.log(typeof "2121212");
console.log(typeof 2121212);
console.log(typeof undefined);
console.log(typeof null);

//...............................

console.log(parseInt("454"));
console.log(parseInt("4343.44"));
console.log(parseFloat("4343.44"));
// 3 number finish //
