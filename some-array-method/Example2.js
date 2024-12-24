const users = [
  { productId: 1, productName: "mobile", price: 16000 },
  { productId: 2, productName: "Laptop", price: 56000 },
  { productId: 3, productName: "headphones", price: 600 },
  { productId: 4, productName: "ipad", price: 450000 },
  { productId: 5, productName: "earBuds", price: 2000 },
  { productId: 6, productName: "smartWatch", price: 1000 },
];

const ans = users.some((productPrice) => productPrice.price > 100000);
console.log(ans)
