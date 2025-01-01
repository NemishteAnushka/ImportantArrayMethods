//Given an array of objects representing products, add a new property inStock with the value true to each object.
const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" },
];

const addStockValue = products.map((items) => {
  return { ...items, inStock: true };
});

console.log(addStockValue);
