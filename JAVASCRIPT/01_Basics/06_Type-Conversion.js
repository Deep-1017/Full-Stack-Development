let value = 0;
// console.log(typeof value);


converted_value = Boolean(value)
// console.log(typeof converted_value);


let age = "             12               "
// console.log(`Value of age before conversion: ${age}`);
// console.log(typeof age);

// console.log("----------------------------------------------");

let age_convert = Number(age)
// console.log(`Value of age after conversion: ${age_convert}`);
// console.log(typeof age_convert);




// Boolean Conversion
let num = ""
let num_convert = Boolean(num)
console.log(`Value of num: ${num_convert}`);
console.log(typeof num_convert);


// Falsy Values = 0, -0, 0n, "", null, undefined, NaN
// Truthy Values = All values that are not falsy