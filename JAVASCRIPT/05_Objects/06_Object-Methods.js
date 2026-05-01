const user = {
  name: "John",
  age: 30,
  greet: function () {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  },
};

// console.log(user);


// user.greet(user.name, user.age);
user.greet();
