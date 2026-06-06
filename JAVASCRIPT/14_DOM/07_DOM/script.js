function createLI(langName) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(langName));
  document.querySelector(".language").appendChild(li);
}

createLI("Python");
createLI("C");
createLI("C++");
createLI("PHP");
createLI("Typescript");

// Edit
const nthLang = document.querySelector("li:nth-child(2)");
// nthLang.innerHTML = 'Rust'
const newli = document.createElement("li");
newli.textContent = "Rust";
nthLang.replaceWith(newli);

// Delete
const lastlang = document.querySelector("li:last-child");
lastlang.remove();
