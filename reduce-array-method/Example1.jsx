//Sum of all numbers present in array
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = number.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

console.log(sum);

//Lets understand this
//starting of program accumulator will be 1 means start number in array
//CurrentValue will be after accumulator value which is in this case 2
// and then the return value will be saved in accumulator

// accumulator     currentValue           return
// 1                2                       3
// 3                3                       6
// 6                4                       10
// 10               5                       15
// 15               6                       21
// 21               7                       28
// 28               8                       36
// 36               9                       45
// 45               10                      55

//last return will be the sum
