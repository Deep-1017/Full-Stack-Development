// const head = document.getElementsByClassName('heading')
// console.log(head);

// getElementsByClassName() returns a HTMLCollection, which looks like the array but it does not an array. So if we want to apply the methods of array then we have to convert HTMLCollection into an Array.

// Array.from() method convert HTMLCollection to Array
// const collectionToArr = Array.from(head)
// console.log(collectionToArr);

const head = document.querySelectorAll('.heading')
console.log(head);

// querySelectorAll() returns a HTMLCollection