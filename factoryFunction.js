function hex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
function rgb(r, g, b) {
  return `rgb(${r},${g},${b})`;
}

function makeColor(r, g, b) {
  const color = {};
  color.r = r;
  color.g = g;
  color.b = b;
  color.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r},${g},${b})`;
  };
  return color;
}

const firstColor = makeColor(35, 255, 150);
console.log(firstColor.rgb());

/////////////////////////////////////////////////////
//         Codeinnoviro youtube channel           //
///////////////////////////////////////////////////

const circle = {
  redius: 1,
  position: {
    x: 1,
    y: 1,
  },
  isVisiting: true,
  draw() {
    console.log("draw");
  },
};
console.log(circle.position.x);

console.log("------------- Factory Function ------------");

function createCircle(radius, position, isVisible) {
  return {
    radius,
    position,
    isVisible,
    draw() {
      console.log("draw is another function");
    },
  };
}
const cicle1 = createCircle(1, { x: 1, y: 2 }, true);
console.log(cicle1);

console.log("------------- Constructor Function ------------");

function CreateCircle1(radius, position, isVisible) {
  this.radius = radius;
  this.position = position;
  this.isVisible = isVisible;
}
console.log(new CreateCircle1(1, { x: 1, y: 2 }, true));

// Another Example

function Student(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = dob;
}
const student1 = new Student("Sazzad", "Hossain", "10 / 2 / 1996");
console.log(student1.firstName);

// Another Example - 1

const Person = function (firName, lasName, dob) {
  this.firName = firName;
  this.lasName = lasName;
  this.dob = new Date(dob);
};

const personeOne = new Person("Shayla", "Akther", "1/5/1995");
console.log(personeOne);

const fullName = `${personeOne.firName} ${personeOne.lasName} and she's Deth of Birth is ${personeOne.dob}`;
console.log(fullName);
// 19 number er 4 number ta ses 5 number ta start
