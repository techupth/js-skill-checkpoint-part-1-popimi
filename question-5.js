// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "SALE50";
// เริ่มเขียนโค้ดตรงนี้
const calculateTotalPrice = (products, promotionCode) => {
  let total = products.reduce(
    (value, curr) => value + curr.price * curr.quantity,
    0
  );
  let checkPromotion =
    promotionCode === "SALE50"
      ? `ได้รับส่วนลด 50% รวมราคาสินค้าทั้งหมด ${total * 0.5} บาท`
      : promotionCode === "SALE20"
      ? `ได้รับส่วนลด 20% รวมราคาสินค้าทั้งหมด ${total * 0.8} บาท`
      : `ไม่ได้รับส่วนลด รวมราคาสินค้าทั้งหมด ${total} บาท`;
  return checkPromotion;
};

console.log(calculateTotalPrice(products, promotionCode));
