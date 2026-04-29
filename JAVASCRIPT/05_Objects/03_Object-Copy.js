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


// console.log(user.address.addLine.line2);


const admin = user; // copy by reference

// console.log(admin);
admin.name = "Alice";

console.log(admin);
console.log(user);

const a = {};
const b = {};

// console.log(a == b);
// console.log(a === b);
