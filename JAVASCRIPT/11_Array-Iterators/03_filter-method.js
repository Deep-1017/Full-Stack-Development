const numbers = [45, 4, 9, 16, 25];

// const myNum = numbers.filter((item) => {return item > 20})
// console.log(myNum);
// console.log(numbers);


const books = [
  {
    name: "Atomic Habits",
    price: 499,
    author: "James Clear",
    release: 2018,
    addition: 2020,
  },
  {
    name: "The Alchemist",
    price: 350,
    author: "Paulo Coelho",
    release: 1988,
    addition: 2004,
  },
  {
    name: "Rich Dad Poor Dad",
    price: 420,
    author: "Robert Kiyosaki",
    release: 1997,
    addition: 2004,
  },
  {
    name: "Clean Code",
    price: 799,
    author: "Robert C. Martin",
    release: 2008,
    addition: 2010,
  },
  {
    name: "Think and Grow Rich",
    price: 299,
    author: "Napoleon Hill",
    release: 1937,
    addition: 1990,
  },
];

const myBook = books.filter((bk) => bk.price > 400 && bk.addition > 2010);
// console.log(myBook);