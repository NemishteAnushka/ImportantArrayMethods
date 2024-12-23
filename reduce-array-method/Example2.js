//Calculate Total amount
const userCart = [
  { id: 1, productName: "Mobile", price: 16000 },
  { id: 2, productName: "Laptop", price: 56000 },
  { id: 1, productName: "headphones", price: 2000 },
];

const Total = userCart.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.price;
},0);

console.log(Total);
