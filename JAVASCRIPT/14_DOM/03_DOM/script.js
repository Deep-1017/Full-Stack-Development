const h1 = document.querySelector("#head")
const h3 = document.querySelectorAll(".head3")

h1.style.color = "red"

// h3.style.color = "blue"

h3.forEach((e) => {
    e.style.color = "blue"
})

console.log(h3);
