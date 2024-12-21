//Count how many users are above 30 years old:
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

//asign variable for count
let count = 0;
users.forEach((items) => {
  //   console.log(items.age);
  if (items.age > 30) {
    count++;
  }
});

console.log(`Number of users above 30: ${count}`);
