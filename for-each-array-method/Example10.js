// Print only the even numbers from the array:

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach((items) => {
  //   console.log(items);
  if (items % 2 === 0) {
    console.log(items);
  }
});
