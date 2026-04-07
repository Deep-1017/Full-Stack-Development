let isRain = false;

if (isRain) {
  console.log("Bring Umbrella !");
} else {
  console.log("Not bring umbrella !");
}

// Conditional Operator =>  ? :
let num = -20;

if (num > 0) {
  console.log("POSITIVE !");
} else if (num == 0) {
  console.log("ZERO !");
} else {
  console.log("NEGATIVE !");
}

num > 0
  ? console.log("POSITIVE !")
  : num == 0
    ? console.log("ZERO !")
    : console.log("NEGATIVE !");
