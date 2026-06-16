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