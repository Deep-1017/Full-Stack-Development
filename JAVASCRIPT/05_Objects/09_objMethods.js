const user = {
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
};

console.log(Object.keys(user.address))
console.log(Object.values(user.address))
console.log(Object.entries(user.address))
