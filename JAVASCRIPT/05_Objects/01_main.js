const person = {
  fname: "Deep",
  lname: "Kansara",
  age: 24,
  email: "deep123@gmail.com",
  mobileNo: 123457890,
  isIndian: false,
};

person.isIndian = true;

delete person.isIndian;

// console.log("age" in person);

// console.log(person);
// console.log(person.fname);
// console.log(person["age"]);

// const fruits = new Object()

// fruits.name = "Mango"
// fruits.price = 100
// fruits.color = "Yellow"

function myFruits(name, price, color) {
  return {
    name: name,
    price: price,
    color: color,
  };
}

const mango = myFruits("Mango", 100, "Yellow");
const apple = myFruits("Apple", 50, "red")
const kiwi = myFruits("Kiwi", 150, "green")
console.log(mango);
console.log(apple);
console.log(kiwi);

