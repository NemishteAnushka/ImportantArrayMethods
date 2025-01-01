const numbers = [10, 20, 30, 40];

const multiplyByIndex = numbers.map((items, index) => {
  return items * index;
});

console.log(multiplyByIndex);
