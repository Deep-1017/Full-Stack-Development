let income = 500000;
let tax;

if (income < 250000) {
    tax = 0;
} else if (income >= 250000 && income < 500000) {
    tax = income * 0.05;
} else if (income  < 1000000) {
    tax = (250000 * 0) + (250000 * 0.05) + (income - 500000) * 0.2;
} else {
    tax = (250000 * 0) + (250000 * 0.05) + (500000 * 0.2) + (income - 1000000) * 0.3;
}

let cess = tax * 0.04;
     
let totalTax = tax + cess;

console.log("Total tax to be paid: " + totalTax);
