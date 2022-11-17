const nums = [1, 2, 3, 4, 5, 6, 7, 8];

const doubles = nums.map((n) => console.log(n * 5));

const parityList = nums.map((n) => {
  if (n % 2 === 0) return "even";
  else {
    return "odd";
  }
});
console.log(parityList);
