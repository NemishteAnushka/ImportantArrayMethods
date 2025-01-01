//Given an array, return a new array where null or undefined values are replaced with "N/A".

const data = [1, null, 3, undefined, 5];

const filterOut = data.map((items) => {
  if (items === null || items === undefined) {
    return "N/A";
  } else {
    return items;
  }
});

console.log(filterOut);
