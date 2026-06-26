// Fetch Api using async await function

// async function getAllUsers() {
//   const requestUrl = "https://jsonplaceholder.typicode.com/users";

//   const response = await fetch(requestUrl);

//   // console.log(response);
//   const data = await response.json();
//   // console.log(data);
//   console.log(data[2]);
// }

// getAllUsers();

// Fetch Api using .then().catch().finally()

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
