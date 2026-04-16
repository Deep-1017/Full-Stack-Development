# JavaScript Functions – Practice Questions

### Topics: Declaration | Expression | Arrow | Default Params | Rest/Spread | Callbacks | Recursion | Closures | IIFE | Higher-Order Functions

---

## Easy

**Q1. Greeting Function**  
Write a function `greet(name)` that returns `"Hello, <name>! Welcome."`.  
Call it with your own name and print the result.

---

**Q2. Area Calculator**  
Write three separate functions:

- `areaOfCircle(r)` → returns `π * r²`
- `areaOfRectangle(l, b)` → returns `l * b`
- `areaOfTriangle(b, h)` → returns `0.5 * b * h`

---

**Q3. Temperature Converter**  
Write two functions:

- `celsiusToFahrenheit(c)` → returns `(c × 9/5) + 32`
- `fahrenheitToCelsius(f)` → returns `(f − 32) × 5/9`

---

**Q4. Arrow Function – Square and Cube**  
Write arrow functions:

- `square = (n) => ...` → returns `n²`
- `cube = (n) => ...` → returns `n³`

---

**Q5. Default Parameters**  
Write a function `introduce(name, role = "Developer", city = "Gujarat")` that returns:
`"Hi, I am <name>, a <role> from <city>."`  
Call it with and without the optional parameters.

---

**Q6. Check Palindrome**  
Write a function `isPalindrome(str)` that returns `true` if the string reads the same forwards and backwards.  
Example: `"racecar"` → `true`, `"hello"` → `false`

---

**Q7. Find Maximum in Array**  
Write a function `findMax(arr)` that takes an array of numbers and returns the largest number without using `Math.max`.

---

**Q8. Count Occurrences**  
Write a function `countOccurrences(arr, target)` that counts how many times `target` appears in `arr`.
Example: `([1, 2, 2, 3, 2], 2)` → `3`

---

## 🟡 Intermediate

**Q9. Function Expression vs Declaration**  
Rewrite the `greet` function (Q1) as:

1. A **function expression** stored in a variable
2. An **arrow function**

Observe the difference in hoisting: try calling each version before its definition and note what happens.

---

**Q10. Rest Parameters – Sum All**  
Write a function `sumAll(...numbers)` using rest parameters that accepts any number of arguments and returns their sum.
Example: `sumAll(1, 2, 3, 4, 5)` → `15`

---

**Q11. Spread Operator with Functions**  
You have an array `const scores = [78, 92, 55, 88, 70]`.
Write a function `getStats(arr)` that uses the spread operator to find:

- Minimum score
- Maximum score
- Average score

---

**Q12. Callback Function – Array Processor**  
Write a function `processArray(arr, callback)` that applies `callback` to every element and returns a new array.
Test it by:

1. Passing a callback that doubles each number
2. Passing a callback that converts each string to uppercase

---

**Q13. Higher-Order Function – Custom Filter**   
Write your own version of `Array.filter` named `myFilter(arr, testFn)`.
It should return a new array containing only elements for which `testFn` returns `true`.  
Test: filter out all odd numbers from `[1, 2, 3, 4, 5, 6, 7, 8]`.

---

**Q14. Closure – Counter**  
Write a function `createCounter()` that returns an object with three methods:

- `increment()` → increases count by 1
- `decrement()` → decreases count by 1
- `getCount()` → returns current count

The count must be private (not directly accessible from outside).

---

**Q15. IIFE – Initialize Config**  
Write an IIFE (Immediately Invoked Function Expression) that:

1. Sets up a configuration object with `appName`, `version`, and `debugMode`
2. Prints the config
3. Returns the config object stored in a `const`

Explain why IIFE is useful here.

---

**Q16. Recursive Factorial**  
Write a recursive function `factorial(n)` that calculates `n!` without using any loop.  
Also add a base case to handle `n = 0` and negative numbers.

---

**Q17. Recursive Fibonacci**  
Write a recursive function `fibonacci(n)` that returns the `n`th Fibonacci number.  
Example: `fibonacci(7)` → `13`

> Also compare: how many function calls does recursion make vs. the loop version from the Loops file?

---

**Q18. Function Returning Function**  
Write a function `multiplier(x)` that returns a new function. The returned function takes a number `y` and returns `x * y`.

```js
const double = multiplier(2);
const triple = multiplier(3);
double(5); // 10
triple(5); // 15
```

---

## Hard

**Q19. Memoization**
Write a function `memoize(fn)` that takes any function and returns a memoized version of it.  
The memoized version should cache results so the same input isn't computed twice.  
Test it with a slow Fibonacci function using `console.time` to show the speedup.

---

**Q20. Currying**  
Write a curried function `add(a)(b)(c)` that adds three numbers.  
Then write a generic `curry(fn)` utility that converts any regular multi-argument function into a curried one.  
Example:

```js
const curriedAdd = curry((a, b, c) => a + b + c);
curriedAdd(1)(2)(3); // 6
curriedAdd(1, 2)(3); // 6
```

---

**Q21. Custom `map`, `filter`, and `reduce` from Scratch**  
Implement your own versions without using built-in array methods:

- `myMap(arr, fn)` → transforms each element
- `myFilter(arr, fn)` → keeps matching elements
- `myReduce(arr, fn, initial)` → accumulates to a single value

Test: use all three together to:

1. Take an array of numbers
2. Filter out numbers less than 5
3. Double the remaining numbers
4. Sum them all

---

**Q22. Deep Clone using Recursion**  
Write a recursive function `deepClone(obj)` that creates a true deep copy of a nested object/array.  
It should handle:

- Nested objects
- Arrays inside objects
- Primitives (string, number, boolean)

---

**Q23. Compose and Pipe**  
Write two utility functions:

- `compose(...fns)` → applies functions right to left
- `pipe(...fns)` → applies functions left to right

```js
const double = (x) => x * 2;
const addTen = (x) => x + 10;
const square = (x) => x * x;

pipe(double, addTen, square)(3); // ((3*2)+10)² = 256
compose(square, addTen, double)(3); // same result
```

---

> 💡 **Tip:** Functions are the heart of JavaScript. Master the difference between **what a function does** (its logic) and **what it returns** (its output). A function that doesn't `return` gives you `undefined`.
