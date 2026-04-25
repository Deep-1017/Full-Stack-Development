const person = {
  fname: "Deep",
  lname: "Kansara",
  age: 24,
  email: "deep123@gmail.com",
  mobileNo: 123457890,
  isIndian: false,
};

let codes = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  "+1": "USA"
};

for (const code in codes) {
    console.log(codes[code]);
}

// for (const key in person) {
//   console.log(person[key]);
// }
