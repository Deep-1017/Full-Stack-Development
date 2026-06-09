// let json = '{ "age": 30 }'; // incomplete data

// try {
//   let user = JSON.parse(json); // <-- no errors

//   if (!user.name) {
//     throw new Error("name is not defined !");
//   }

//   console.log(user.name); // no name!
// } catch (err) {
//   console.log("JSON Error: " + err.message);
// } finally {
//     console.log("Code runs finally !");
// }



let num = +prompt("Enter a positive integer number?", 35);