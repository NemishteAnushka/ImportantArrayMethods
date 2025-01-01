const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Jack" },
];

const userName = users.map((items) => {
  return items.name;
});

console.log(userName);
