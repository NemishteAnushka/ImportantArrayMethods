//Sort numbers in accending order
//sort method do not return new array it modify the old one
const nums = [40, 100, 1, 5, 25, 10];

nums.sort((a, b) => {
  return a - b;
});

console.log(nums);

//how it works ?
//if substraction of two element return positive number then it keeps "b" at 1st position then "a" like "b" "a"

//if returns negative the it keeps "a" then "b"

//for eg
// let suppose 40 is a and 100 is b
// 40 - 100 = -60
//in this case 40 will be less than 100 so position will be 40 and 100 "a" & "b"

//for eg
//in case of 25 and 10
// 25 - 10 = 15
// so 10 will be first then 25
// "b" & "a"
