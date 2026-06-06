const div = document.createElement('div')
console.log(div);

div.id = "box"
div.className = "container"
div.setAttribute("title", "new div")

// div.innerText = "JS DOM"
const text = document.createTextNode("JS DOM")

div.appendChild(text)
document.body.appendChild(div) 