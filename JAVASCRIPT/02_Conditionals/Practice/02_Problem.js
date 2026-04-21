let marks = 95;
let general = true;


if (marks >= 90) {
  console.log("Grade:A");
  if (!general) {
    console.log("You Achieve Full Scholarship..");
  } else {
    console.log("You Achieve Full Scholarship+5000 Bonus");
  }
} else if (marks >= 75 && marks <= 89) {
  console.log("Grade:B");
  if (!general) {
    console.log("You Achieve 50% Scholarship..");
  } else {
    console.log("You Achieve 75% Scholarship");
  }
} else if (marks >= 60 && marks <= 74) {
  console.log("Grade:C");
  console.log("Fail...No Scholarship");
} else {
  console.log("Invalid...");
}
