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


// const cloneUser = user; // copy by reference

const cloneUser = {}

// for (const key in user) {
//     cloneUser[key] = user[key]; 
// }

Object.assign(cloneUser, user); // shallow copy

console.log(cloneUser);
