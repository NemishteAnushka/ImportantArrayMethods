//In case of decending order
const points = [40, 100, 1, 5, 25, 10];

points.sort((a, b) => {
  return b - a;
});

console.log(points);

//if number return negative number the a will come first and then b;

//if positive number comes b first then a
