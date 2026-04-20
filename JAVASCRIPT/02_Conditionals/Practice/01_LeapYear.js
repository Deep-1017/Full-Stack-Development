// 11)
// let year = 2000;

// if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//   console.log("Leap Year");
// } else {
//   console.log("Not Leap Year");
// }

// 14)
// let username = "admin"
// let password = 1234

// if(username === "admin") {
//     if(password === 1234) {
//         console.log("Login Successful");
//     }
//     else {
//         console.log("Wrong Password");
//     }
// }
// else {
//     console.log("Invalid Username");
// }

// 17)
let atm_pin = 1234;
let withdraw_amt = 5000;
let current_balance = 10000;

if (atm_pin === 1234) {
  if (withdraw_amt % 100 == 0) {
    if (withdraw_amt <= current_balance) {
      console.log("Please Collect Your Cash");
    } else {
      console.log("Insufficient Balance");
    }
  } else {
    console.log("Withdraw amnt is not a multiple of 100");
  }
} else {
  console.log("Incorrect Pin");
}
