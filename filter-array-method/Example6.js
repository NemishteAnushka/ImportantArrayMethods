//Write a function filterHighEarners that takes an array of employee objects, each with name and salary properties, and a threshold value. Return a new array of employees whose salaries are above the threshold.
const employees = [
  { name: "Alice", salary: 5000 },
  { name: "Bob", salary: 3000 },
  { name: "Charlie", salary: 7000 },
  { name: "David", salary: 4000 },
];
const threshold = 4000;

const highSalary = employees.filter((items) => {
  return items.salary > threshold;
});
console.log(highSalary);
