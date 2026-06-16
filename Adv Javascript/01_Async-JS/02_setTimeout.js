function greet() {
  console.log("Hello");
}

let greetTimeout = setTimeout(greet, 5000);

clearTimeout(greetTimeout)

setTimeout((name, age) => {
    console.log(`Hi! My name is ${name} & I'm ${age} years old.`);
}, 2000, "Deep", 24);

console.log("Hello World after 5 sec");

// Logs 'Hello' to the console after 2 seconds
