const items = ["item1", "item2", "item3"];
console.log(items);

//start , delete , insert

//delete item on 0th index
// items.splice(0, 1);
// console.log(items);

//insert
// items.splice(1, 0, "inserted Item");
// console.log(items);

//delete and insert

items.splice(1, 1, "insert");
console.log(items);
