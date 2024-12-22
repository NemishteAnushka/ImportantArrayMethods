const numbers = [1, 2, 3, 4, 5, 6];

const getEvenNumber = numbers.filter((items) => {
  return items % 2 === 0;
});
console.log(getEvenNumber);
