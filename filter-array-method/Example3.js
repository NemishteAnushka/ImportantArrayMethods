// Filter Adults (Age 18 and Above)
const people = [
  { name: "John", age: 17 },
  { name: "Jane", age: 19 },
  { name: "Paul", age: 16 },
  { name: "Anna", age: 22 },
];

const above18 = people.filter((items) => {
  return items.age >= 18;
});
console.log(above18);
