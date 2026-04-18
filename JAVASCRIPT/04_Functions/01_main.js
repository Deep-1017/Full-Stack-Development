// let a = 10
// let b = 20
// let c = a + b;
// console.log(c);

// let d = 20
// let e = 23
// let f = d + e
// console.log(f);

// 1)
// Function Definition
function greet() {
  console.log("Hello World !");
}

// greet();         // Function Call

// 2)
function addition(a, b) {
  let res = a + b;
  console.log(res);
}

// let res = addition;
// console.log(res);

// 3)
function mul(a, b, c = 2) {
  let res1 = a * b * c;
  return res1;
}

let value = mul(10, 20, 1);
// console.log(value);

// 4)
let showMsg = function (from, text) {
  text = text || "No text given";
  console.log(`${from}: ${text}`);
};

// showMsg("Deep");
// showMsg("Deep", "Hello");

// 5)
function sayHi() {
  // (1) create
  console.log("Hello");
}

let func = sayHi     // copy

sayHi()
func()
