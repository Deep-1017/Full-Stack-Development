const num1 = [10, 20, 30, 40]
const num2 = [50, 60, 70, 80, 90, 100]

// const num3 = num1.concat(num2)

const num3 = [...num1, ...num2]
console.log(num3);