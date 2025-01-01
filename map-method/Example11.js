const stringarr = ["abc", "bca", "dbe"]; //out put [021]

// const stringIndex = stringarr.map((items, index) => {
//   console.log(items.indexOf("b"));
//   console.log(index);
//   if (items.indexOf("b") === 1) {
//   }
// });

const targetChar = "b";

const stringIndex = stringarr.map((items) => {
  console.log(items.indexOf(targetChar));
});
