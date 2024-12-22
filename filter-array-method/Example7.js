// Write a function filterLongStrings that takes an array of strings and a number n. Return a new array containing only the strings that have a length greater than n.

const strings = ["cat", "elephant", "dog", "rhinoceros", "bat"];
const n = 3;

const filterLongStrings = strings.filter((items) => {
  return items.length > n;
});
console.log(filterLongStrings);
