function sortProductsByPrice(products) {
  for (let i = 0; i < products.length; i++) {
    for (let j = 0; j < products.length - i - 1; j++) {
      let temp = products[j];
      if (products[j].price > products[j + 1].price) {
        products[j] = products[j + 1];
        products[j + 1] = temp;
      }
    }
  }
  return products;
}

// Test case
const products = [
  { name: "Apple", price: 1.2 },
  { name: "Banana", price: 0.8 },
  { name: "Cherry", price: 2.5 },
  { name: "Date", price: 1.5 },
];
console.log(sortProductsByPrice(products));

// Output: [
//   { name: 'Banana', price: 0.8 },
//   { name: 'Apple', price: 1.2 },
//   { name: 'Date', price: 1.5 },
//   { name: 'Cherry', price: 2.5 }
// ]
