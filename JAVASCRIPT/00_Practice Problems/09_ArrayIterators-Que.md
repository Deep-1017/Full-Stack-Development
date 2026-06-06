# JavaScript Array Iterators — Practice Questions

## Easy

**Q1.** Use `.map()` to convert an array of Celsius temperatures to Fahrenheit.
```js
[0, 100, 37, -40] // → [32, 212, 98.6, -40]
```

**Q2.** Use `.filter()` to get all words longer than 4 characters from an array of words.

**Q3.** Use `.find()` to get the first number greater than 10 from an array.
```js
[3, 7, 12, 5, 20].find(...)  // → 12
```

**Q4.** Use `.some()` and `.every()` on an array of numbers: check if *any* number is negative, and if *all* numbers are positive.

**Q5.** Use `.forEach()` to log each item in an array along with its index.

**Q6.** Use `.reduce()` to calculate the product of all numbers in an array.
```js
[1, 2, 3, 4, 5] // → 120
```

**Q7.** Use `.includes()` and `.indexOf()` to check for a value in an array. When would you prefer one over the other?

---

## Intermediate

**Q8.** Given an array of student objects with `name` and `grade`, use `.map()`, `.filter()`, and `.reduce()` in a chain to:
- Filter students who passed (grade ≥ 50)
- Extract their names
- Reduce names to a comma-separated string

**Q9.** Use `.flatMap()` to split an array of sentences into individual words.
```js
["Hello world", "foo bar"].flatMap(s => s.split(" "))
// → ["Hello", "world", "foo", "bar"]
```

**Q10.** Use `.reduceRight()` to compose an array of functions (pipe them right-to-left).
```js
const double = x => x * 2;
const addOne = x => x + 1;
compose([double, addOne])(5) // → double(addOne(5)) = 12
```

**Q11.** Implement `.map()` using only `.reduce()`.

**Q12.** Implement `.filter()` using only `.reduce()`.

**Q13.** Given an array of numbers, use iterators to find:
- The second largest number
- All numbers that appear more than once
- The running total (cumulative sum) at each index

**Q14.** Use `.sort()` with a custom comparator to sort an array of version strings like `["1.10.0", "1.9.2", "2.0.1"]` in correct version order (not lexicographic).

**Q15.** Use `.findIndex()` to locate the position of the first object in an array where `active: false`, then use that index to remove it from the array.

---

## Hard

**Q16.** Implement a custom `myReduce(arr, callback, initialValue)` from scratch that behaves exactly like `Array.prototype.reduce`, including throwing a `TypeError` when no initial value is provided for an empty array.

**Q17.** Write a `pipe(...fns)` function that takes any number of functions and returns a new function that passes its input through each function in sequence (left to right), using `.reduce()`.
```js
pipe(addOne, double, addOne)(5) // → ((5+1)*2)+1 = 13
```

**Q18.** Implement lazy evaluation for array iterators. Create a `LazyArray` class with `.map()`, `.filter()`, and `.take(n)` methods that do **not** process elements until `.evaluate()` is called, and only process as many as needed.

**Q19.** Use array iterators to implement a **frequency counter** that finds the most common element in an array. Handle ties by returning all tied elements.
```js
mostFrequent([1,1,2,3,3,3,2]) // → [3]
mostFrequent([1,1,2,2])       // → [1, 2]
```

**Q20.** Write a function `asyncMap(arr, asyncFn)` that applies an async function to each element of an array. Implement two versions:
- One where all async operations run **in parallel** (`Promise.all`)
- One where they run **sequentially** (one at a time using `reduce`)