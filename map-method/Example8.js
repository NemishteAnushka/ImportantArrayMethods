const prices = [5, 10, 15, 20];

const $symb = prices.map((items) => {
  return `$${items}`;
});

console.log($symb);
