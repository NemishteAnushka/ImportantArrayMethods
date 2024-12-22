// Problem 2: Filter Words Starting with 'A'

const words = ["Apple", "Banana", "Avocado", "Cherry", "apricot"];
//Each word is converted to lowercase with word.toLowerCase().
// "Apple".toLowerCase() becomes "apple".
// "Avocado".toLowerCase() becomes "avocado".
// "apricot".toLowerCase() stays "apricot".
// Then .startsWith('a') checks if the lowercase version of the word starts with 'a'.
// As a result, both uppercase and lowercase words that start with 'A' are included in the output.
const wordsStartingA = words.filter((items) => {
  return items.toLowerCase().startsWith("a");
});
console.log(wordsStartingA);
