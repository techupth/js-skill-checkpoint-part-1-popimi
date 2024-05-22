// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
const lowerQuantity = inventory
  .map((inv) => [inv.name, inv.quantity])
  .reduce((acc, curr) => (acc[1] < curr[1] ? acc : curr));
console.log(
  `สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${lowerQuantity[0]} ซึ่งมี ${lowerQuantity[1]} ชิ้น`
);
