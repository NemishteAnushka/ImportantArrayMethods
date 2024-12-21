//Separate numbers into two arrays: one for odd numbers and one for even numbers:

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const even = [];
const odd = [];

numbers.forEach((items) => {
  if (items % 2 === 0) {
    even.push(items);
  } else {
    odd.push(items);
  }
});

console.log(even);
console.log(odd);
