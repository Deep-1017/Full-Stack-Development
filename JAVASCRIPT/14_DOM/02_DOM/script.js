const nav = document.querySelector("#nav")
const list = document.querySelector(".languages-list")
const heading = document.querySelector("#heading")
const btn = document.querySelector("#btn")

// console.log(nav.innerHTML);
// console.log(nav.innerText);
// console.log(nav.textContent);

list.innerHTML = `
<li>Python</li>
<li>Python</li>
`

heading.style.color = "red"
nav.style.backgroundColor = "blue"
nav.style.color = "white"
nav.style.padding = "10px 20px"

// list.innerText = `
// <li>Python</li>
// <li>Python</li>
// `
// list.textContent = `
// <li>Python</li>
// <li>Python</li>
// `