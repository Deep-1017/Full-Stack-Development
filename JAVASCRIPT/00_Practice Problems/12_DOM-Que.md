# JavaScript DOM — Practice Questions
> 
> For each question, write the HTML structure you need and the JS code to manipulate it.

---

## Easy

**Q1.** Select an element with the ID `"title"` and change its text content to `"Hello, DOM!"`. Then change its color to blue using JavaScript.

**Q2.** Create a `<button>` that, when clicked, toggles the visibility of a `<div>` (show/hide it each time using `display` style).

**Q3.** Create a simple `<ul>` list. Write JS that adds a new `<li>` item to the list every time a button is clicked. The new item's text should come from an `<input>` field.

**Q4.** Write JS that removes an element from the DOM when it is clicked (use event delegation on the parent).

**Q5.** Change the `src` attribute of an `<img>` tag when a button is clicked to display a different image.

**Q6.** Add and remove CSS classes from a `<div>` element using `classList.add()`, `classList.remove()`, and `classList.toggle()`.

**Q7.** Select all `<p>` tags on a page and change their font size to `18px` using `querySelectorAll`.

**Q8.** Create an input field that listens for keypress events and logs each key the user types as they type it.

---

## Intermediate

**Q9.** Build a **to-do list** app:
- Add items via an input + button
- Mark items as complete by clicking them (toggle a `completed` CSS class)
- Delete individual items with a ✕ button on each item
- Use **event delegation** for click handling on list items

**Q10.** Build a **character counter**: an `<textarea>` that shows `"X / 200 characters"` below it, and turns red when the limit is exceeded.

**Q11.** Implement a **tab component**: clicking on a tab header shows the corresponding content panel and hides the others. No CSS frameworks — write it all in plain JS.

**Q12.** Create a **modal dialog** (popup) that:
- Opens when a button is clicked
- Closes when the ✕ button, or the backdrop (outside the modal), is clicked
- Prevents background scrolling while open

**Q13.** Build a **drag-and-drop list**: make a list of items reorderable by dragging, using the HTML5 Drag and Drop API.

**Q14.** Create a live **search/filter**: given a list of country names rendered in `<li>` elements, add an input that filters visible items in real time as the user types.

**Q15.** Build an **accordion component**: a list of questions where clicking a question expands its answer and collapses any other open answer. Animate the open/close with a CSS transition.

**Q16.** Implement **infinite scroll**: as the user scrolls to the bottom of the page, load and append 10 more "posts" (fake data from an array). Use `IntersectionObserver` instead of a scroll event listener.

**Q17.** Create a **colour picker**: three `<input type="range">` sliders for R, G, B (0–255). As the user moves any slider, update a preview box's background colour and display the hex value.

**Q18.** Build a **form validator**: a sign-up form with fields for name, email, password, and confirm password. Validate each field on `blur` and show/hide inline error messages without reloading the page.

---

## Hard

**Q19.** Build a **virtual list renderer** (windowed list): given an array of 10,000 items, render only the ~20 items visible in the viewport at any time. As the user scrolls, update which items are rendered. This is the core concept behind libraries like `react-window`.

**Q20.** Implement a **rich text editor** from scratch inside a `contenteditable` `<div>`. Add a toolbar with bold, italic, underline, and link insertion. Use `document.execCommand` or `Selection`/`Range` APIs to apply formatting.

**Q21.** Build a **kanban board** with three columns (Todo, In Progress, Done). Items can be dragged between columns. Persist the board state in `localStorage` so it survives a page refresh.

**Q22.** Implement a **MutationObserver** that watches a specific container `<div>`. Whenever a new child element is added to it (by any means), automatically add a timestamp attribute and a highlight border to the new element.

**Q23.** Create a **custom context menu** (right-click menu) on a specific element. It should appear where the user right-clicks, contain at least 3 custom actions, and disappear when clicking anywhere else. Make sure it stays within the viewport boundaries.

**Q24.** Build a **spreadsheet-like grid** (5×5) where:
- Each cell is editable
- Pressing Tab moves to the next cell, Enter moves down
- A selected cell is highlighted
- Cell `A1` notation is shown in a header bar when a cell is focused
- Compute the sum of a column when `=SUM` is typed in a cell

**Q25.** Implement a **web-based paint app**: a `<canvas>` element where the user can draw freehand with the mouse (or touch). Add controls for brush size and colour. Add an undo feature (up to 10 steps) and a clear button.