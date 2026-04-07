// Logical Op => AND (&&), OR (||), NOT (!), ??

let a = 10;
let b = 20;

if (!(a >= 10) || b <= 10) {
  console.log("True");
} else {
  console.log("False");
}

// !(true)  || (false)
// false || false
// false

// true && true = true
// true && false = false
// false && false = false

// true || true = true
// true || false = true
// false || false = false

// !(true) = false
// !(false) = true
