const numbers = [45, 4, 9, 16, 25];

// const myNum = numbers.map((item) => item + 10);

// console.log(numbers);
// console.log(myNum);

// const newNum = myNum.map((item) => item * 2)
// console.log(newNum);

// const updatedNum = newNum.filter((item) => item > 50)
// console.log(updatedNum);

// const latestNum = updatedNum.map((item) => item * 5)
// console.log(latestNum);

// console.log(numbers);

// Chaining
const myNum = numbers
  .map((item) => item + 10)
  .map((item) => item * 2)
  .filter((item) => item > 50)
  .map((item) => item * 5);

console.log(myNum);
