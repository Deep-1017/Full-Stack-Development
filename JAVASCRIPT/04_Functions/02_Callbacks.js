// Funtion to display something
function myDisplayer(some) {
  console.log(some);
}

// Function to calculate a sum
function myCalculator(num1, num2, myCallback) {
  let res = num1 + num2;
  // console.log(res);
  myCallback(res);
}

// Call the calculator
myCalculator(5, 5, myDisplayer);
