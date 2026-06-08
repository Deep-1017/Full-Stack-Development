const img = document.getElementById("japan");
const list = document.getElementById("images");

// Events: (For self-study & Interview)
// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget
// clientX, clientY, offset, screenX, screenY
// altkey, ctrlkey, shiftkey, keycode

// img.addEventListener("click", function (e) {
//   console.log(e);
// });

// Event Propogation is done in 2 ways:

// 1) Event Bubbling: Bottom to Top
// For any bigger element, always access the inner element first & after that it goes towards the outer elements.

// list.addEventListener("click", () => console.log("list clicked"), false);
// img.addEventListener(
//   "click",
//   (e) => {
//     console.log("japan clicked");
//     e.stopPropagation();
//     // stopPropagation will stop the propagation of the event.
//   },
//   false,
// );

// 2) Capturing Mode: Top to Bottom
// For any bigger element, always access the outer element first & after that it goes towards the inner elements.

// list.addEventListener(
//   "click",
//   function (e) {
//     console.log("Click inside the ul");
//   },
//   true,
// );

// img.addEventListener(
//   "click",
//   function (e) {
//     console.log("Japan Clicked");
//   },
//   true,
// );

// Example
list.addEventListener("click", (e) => {
  console.log(e.target.parentNode);
  let removeElement = e.target.parentNode;
  removeElement.remove();
  // removeElement.parentNode.removeChild(removeIt)
});
