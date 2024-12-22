const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 },
  { name: "Monitor", price: 150 },
];
const minPrice = 200;
const maxPrice = 600;

const newPrice = products.filter((items) => {
  return items.price > minPrice && items.price < maxPrice;
});
console.log(newPrice);
