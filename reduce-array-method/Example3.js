const numbers = [175, 50, 25];

const substractValue = numbers.reduce((acc, currentVal) => {
  return acc - currentVal;
});

console.log(substractValue);

//acc        currentVal        return
//175           50              125
//125           25              100
