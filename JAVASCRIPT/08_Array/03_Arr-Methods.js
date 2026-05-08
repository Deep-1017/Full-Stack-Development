const fruits = [
  "apple",
  "mango",
  "banana",
  "grapes",
  "kiwi",
  "orange",
  "litchi",
  "cherry",
];

// const updatedFruits = fruits.splice(2, 5, "pineapple", "watermelon")
// console.log(updatedFruits);
// console.log(fruits);

// console.log(fruits.slice(1));

// function findNumber(value, index, array) {
//   return value > 18;
// }

const numbers = [4, 9, 16, 25, 29];
const firstFind = numbers.findLast((value, index, array) => {
  return value > 18;
});
console.log(firstFind);

// console.log(fruits.copyWithin(2, 0));

// const myArr = [[1,2],[3,4],[5,6]];
// const newArr = myArr.flat();
// console.log(newArr);

// const cars = ["BMW", "Audi", "Thar"]

// console.log(fruits.toString())

// console.log(fruits.join(" $ "));

// console.log(fruits.concat(cars));

// console.log(fruits[fruits.length - 1]);
// console.log(fruits.at(-2));

// fruits.push("kiwi")
// fruits.pop()
// fruits.pop()
// fruits.pop()

// fruits.shift()
// fruits.unshift("Kiwi")

// console.log(fruits);
