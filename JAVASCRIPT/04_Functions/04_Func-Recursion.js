// 10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1

function sum(n) {
    if(n == 0) {
        return 0
    }
    return n + sum(n-1)
}

let result = sum(5)
console.log(result);




// Factorial: 5*4*3*2*1 = 120

// Fibonacci Series: 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

// first = 1
// second = 1
// next = first + second

// first = second
// second = next
// next = f+ s

// first = 2
// second = 3
// next = 5

// first = 3
// second = 5
// next = 8

// 1, 1, 2, 3, 5