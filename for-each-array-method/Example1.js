//The forEach() array method loops through any array, executing a provided function once for each array element in ascending index order. This function is referred to as a callback function
const array = [1, 2, 3, 4];

//print numbers and index using forEach();

array.forEach(function (number, index) {
  console.log(`The number is ${number} and its index is ${index}`);
});

//multiply number by 2 and print it
array.forEach(function (number) {
  console.log(`${number} * ${number} = ${number * 2}`);
});
