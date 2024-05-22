// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้
inventory[0].quantity = 200;
console.log(inventory[0]);
inventory.push({ name: "Orange", price: 20, quantity: 300 });
// console.log(inventory[2]);
const priceQuantity = inventory.map((value) => value.price * value.quantity);
// console.log(priceQuantity);
const sumPriceQauntity = priceQuantity.reduce((acc, curr) => acc + curr);
console.log(`มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก ${sumPriceQauntity} บาท`);
