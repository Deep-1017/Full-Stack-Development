let arr = ["John", "Smith"]

// Destruturing
let [fname, lname] = arr;

// console.log(fname);
// console.log(lname);


let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

console.log(name1);
console.log(name2);

console.log(rest);
console.log(rest[1]);


