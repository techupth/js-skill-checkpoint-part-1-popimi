// Question #3
let userPassword = "a";
// เริ่มเขียนโค้ดตรงนี้
const checkPasswordStrength = (password) => {
  if (password.length > 10) {
    return "Strong";
  } else if (password.length >= 6) {
    return "Medium";
  } else return "Weak";
};

console.log(checkPasswordStrength(userPassword));
