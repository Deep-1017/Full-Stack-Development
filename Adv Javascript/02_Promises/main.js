// 1)
// Promise Creation
// const promiseOne = new Promise((resolve, reject) => {
//   // Do an Async task
//   // DB Calls, Cryptography, Network

//   setTimeout(() => {
//     console.log("Async Task Performed!");
//     resolve();
//   }, 1000);
// });

// // Promise Consumption
// promiseOne.then(function() {
//     console.log("Promise one consumed");
// })

// 2)
// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Async Task Performed!");
//     resolve();
//   }, 1000);
// }).then(function() {
//     console.log("Promise one consumed");
// })

// 3)
// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("Async Task Performed!");
//     resolve({ username: "Deep", email: "deep@gmail.com" });
//   }, 1000);
// });

// promiseThree.then(function (userData) {
//   console.log(userData);
// });

// 4)
// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     let isError = false;

//     if (!isError) {
//       resolve({ username: "Deep", email: "deep@gmail.com" });
//     } else {
//       reject("ERROR: Something Wrong !");
//     }
//   }, 1000);
// });

// promiseFour
//   .then((userData) => console.log(userData))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("Finally Runs"));

// 5)
// const promiseFive = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = false;
//     if (!error) {
//       resolve({ username: "Javascript", password: "123" });
//     } else {
//       reject("ERROR: JS went wrong");
//     }
//   }, 1000);
// });

// async function consumePromise() {
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumePromise()