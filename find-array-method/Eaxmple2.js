const user = [
  { userId: 1, name: "Anushka" },
  { userId: 2, name: "harshit" },
  { userId: 3, name: "Anuja" },
  { userId: 4, name: "mohit" },
];

const findId3 = user.find((item) => {
  return item.userId === 3;
});

console.log(findId3);
