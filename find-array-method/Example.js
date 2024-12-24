const animal = ["donkey", "dog", "cat"];

const is3Lettered = animal.find((item) => {
  return item.length === 3;
});

console.log(is3Lettered);
