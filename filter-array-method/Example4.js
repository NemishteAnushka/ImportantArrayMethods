// Filter Students with Passing Grades
const students = [
  { name: "Alice", grade: 45 },
  { name: "Bob", grade: 75 },
  { name: "Charlie", grade: 60 },
  { name: "David", grade: 30 },
];

const passStud = students.filter((items) => {
  return items.grade >= 50;
});
console.log(passStud);
