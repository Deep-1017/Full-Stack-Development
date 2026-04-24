// Arrow function
const arrFunc = (a, b, c) => {
  console.log("Hello World");
};

// arrFunc(1, 2, 3);


let age = 12

let adult = () => {
    console.log("You are an adult");
}

let children = () => {
    console.log("You are child");
}

if(age >= 18) {
    adult()
} else {
    children()
}
