function greet() {
  console.log(`Hello`);
}

setInterval(greet, 2000);

function greet(name) {
  console.log(`Hello ${name}`);
}

const intervalId = setInterval(greet, 2000, "Deep");

clearInterval(intervalId);

// Logs 'Hello' every 2 seconds

step1(function (r1) {
  step2(r1, function (r2) {
    step3(r2, function (r3) {
      console.log(r3);
    });
  });
});
