//Calculate the total price of all items in the array:

const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 },
];

let sum = 0;
products.forEach((items) => {
  console.log(items.price);
  sum = sum + items.price;
});

console.log(sum);
