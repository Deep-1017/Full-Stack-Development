# JavaScript Arrays — Practice Questions

## Easy

**Q1.** Create an array of 5 fruits. Add a new fruit to the end, another to the beginning, and then remove one from each end. Log the final array.

**Q2.** Write a function `sumArray(arr)` that returns the sum of all numbers in an array.

**Q3.** Given an array of numbers, return a new array containing only the even numbers.

**Q4.** Find the maximum and minimum values in an array of numbers without using `Math.max` or `Math.min`.

**Q5.** Write a function `reverseArray(arr)` that reverses an array **without** using the built-in `.reverse()` method.

**Q6.** Remove all duplicate values from an array of numbers.
```js
removeDuplicates([1, 2, 2, 3, 4, 4, 5]) // → [1, 2, 3, 4, 5]
```

**Q7.** Merge two arrays and sort the result in ascending order.

---

## Intermediate

**Q8.** Write a function `chunkArray(arr, size)` that splits an array into chunks of a given size.
```js
chunkArray([1,2,3,4,5,6,7], 3) // → [[1,2,3],[4,5,6],[7]]
```

**Q9.** Write a function `flattenArray(arr)` that flattens a deeply nested array into a single-level array **without** using `.flat()`.
```js
flattenArray([1, [2, [3, [4]]]]) // → [1, 2, 3, 4]
```

**Q10.** Given an array of objects with `name` and `age`, sort the array by age in ascending order, and by name alphabetically if ages are equal.

**Q11.** Write a function `rotate(arr, n)` that rotates an array to the right by `n` positions.
```js
rotate([1, 2, 3, 4, 5], 2) // → [4, 5, 1, 2, 3]
```

**Q12.** Write a function `intersection(arr1, arr2)` that returns an array of values found in both arrays (no duplicates).
```js
intersection([1, 2, 3, 4], [2, 4, 6]) // → [2, 4]
```

**Q13.** Given a matrix (2D array), write a function that transposes it (swap rows and columns).
```js
transpose([[1,2,3],[4,5,6]]) // → [[1,4],[2,5],[3,6]]
```

**Q14.** Write a function `groupByLength(words)` that groups an array of words by their length.
```js
groupByLength(["cat","dog","elephant","ant","bee"])
// → { 3: ["cat","dog","ant","bee"], 8: ["elephant"] }
```

**Q15.** Write a function `zipArrays(arr1, arr2)` that combines two arrays into an array of pairs.
```js
zipArrays([1,2,3], ['a','b','c']) // → [[1,'a'],[2,'b'],[3,'c']]
```

---

## Hard

**Q16.** Implement your own version of `Array.prototype.reduce` from scratch (call it `myReduce`). It should work with or without an initial value.

**Q17.** Write a function `longestConsecutiveSequence(arr)` that finds the length of the longest consecutive sequence of integers in an unsorted array.
```js
longestConsecutiveSequence([100, 4, 200, 1, 3, 2]) // → 4  (1,2,3,4)
```

**Q18.** Given an array of integers, find all **unique triplets** that sum to zero.
```js
threeSum([-1, 0, 1, 2, -1, -4]) // → [[-1, -1, 2], [-1, 0, 1]]
```

**Q19.** Write a function `cartesianProduct(...arrays)` that returns the Cartesian product of any number of arrays.
```js
cartesianProduct([1,2], ['a','b'], [true]) 
// → [[1,'a',true],[1,'b',true],[2,'a',true],[2,'b',true]]
```

**Q20.** Implement a `sparse matrix` using arrays: given a 2D array that mostly contains zeros, create a compressed representation and a function to retrieve any element efficiently.