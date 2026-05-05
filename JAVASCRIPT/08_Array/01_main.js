//     0        1         2         3
const fruits = ["apple", "mango", "banana", "grapes"];

fruits[2] = "kiwi";
// console.log(fruits[0]);

// console.log(fruits);

const mixValues = [
  "abc",
  1000,
  true,
  {
    name: "John",
    age: 30,
    email: "john@example.com",
    pincode: 123456,
    address: {
      city: "New York",
      state: "NY",
      country: "USA",
      addLine: {
        line1: "123 Main St",
        line2: "Apt 4B",
      },
    },
  },
  function add(a, b) {
    console.log(a + b);
  },
  "Hi",
  "How are you?",
  500.25,
];

console.log(mixValues.length);
console.log(mixValues[3]);
console.log(mixValues[3].address.country);

