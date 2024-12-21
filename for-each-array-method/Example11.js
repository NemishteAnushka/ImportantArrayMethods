//Create a list of names from an array of objects and store it in a new array:

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const fname = [];

users.forEach((items) => {
  console.log(items.name);
  fname.push(items.name);
});

console.log(fname);
