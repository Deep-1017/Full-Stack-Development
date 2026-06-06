# JavaScript JSON — Practice Questions

## Easy

**Q1.** Convert the following JavaScript object to a JSON string and back to an object:
```js
const user = { name: "Alice", age: 30, hobbies: ["reading", "coding"] };
```
Verify they are not the same reference.

**Q2.** Use the third argument of `JSON.stringify()` to pretty-print a JSON object with 2-space indentation.

**Q3.** Try to `JSON.stringify()` values like `undefined`, a function, `NaN`, `Infinity`, and a `Date`. Log and explain the output for each.

**Q4.** Write a function `safeJsonParse(str)` that parses a JSON string and returns `null` instead of throwing if the string is invalid.

**Q5.** Access deeply nested data from a parsed JSON structure:
```json
{ "user": { "address": { "city": "Mumbai" } } }
```
Write a safe accessor that returns `undefined` instead of throwing if the path doesn't exist.

---

## Intermediate

**Q6.** Use the `replacer` argument of `JSON.stringify()` to serialize only specific keys of an object.
```js
const employee = { name: "Bob", salary: 90000, ssn: "123-45-6789" };
// Serialize only name and salary, exclude ssn
```

**Q7.** Use the `reviver` argument of `JSON.parse()` to automatically convert any date strings (in `"YYYY-MM-DD"` format) to actual `Date` objects during parsing.

**Q8.** Write a function `deepCloneViaJson(obj)` using `JSON.parse(JSON.stringify(obj))`. Then list and demonstrate **at least 3 types of values** that are lost or corrupted by this approach.

**Q9.** You receive a JSON string from a server that sometimes has trailing commas or comments (non-standard). Write a `lenientParse(str)` function that strips them before parsing.

**Q10.** Write a function `jsonDiff(obj1, obj2)` that compares two JSON-serializable objects and returns an object describing what was added, removed, or changed.
```js
jsonDiff({ a: 1, b: 2 }, { b: 3, c: 4 })
// → { added: { c: 4 }, removed: { a: 1 }, changed: { b: { from: 2, to: 3 } } }
```

---

## Hard

**Q11.** Implement a custom `JSON.stringify` (call it `myStringify`) from scratch that handles: strings, numbers, booleans, `null`, arrays, and plain objects. Ignore functions and `undefined`.

**Q12.** Build a `JSONPath` query function `queryJson(data, path)` that retrieves values from a nested JSON structure using dot and bracket notation:
```js
queryJson(data, "users[0].address.city") // → "Mumbai"
```

**Q13.** Write a `flattenJson(obj, separator = '.')` function that flattens a deeply nested JSON object into a single-level object with dot-separated keys, then write the inverse `unflattenJson`.
```js
flattenJson({ a: { b: { c: 1 } }, d: 2 })
// → { "a.b.c": 1, "d": 2 }
```

**Q14.** Implement a streaming JSON parser concept: write a function `parseChunked(chunks)` that accepts an array of string chunks (simulating incoming network data) and waits until a complete, valid JSON value is assembled before parsing it.

**Q15.** Create a `JsonSchema` validator: write a function `validate(data, schema)` that checks a JSON object against a simple schema definition (supporting `type`, `required`, `properties`, and `minLength`/`maxLength` for strings).