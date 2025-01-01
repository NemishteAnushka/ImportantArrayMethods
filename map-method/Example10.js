//Given an array of arrays where each sub-array contains a key and a value, return an array of objects.
const keyValuePairs = [
  ["name", "John"],
  ["age", 30],
];

const returnObj = keyValuePairs.map(([key, value]) => {
  return { [key]: value };
});

console.log(returnObj);
