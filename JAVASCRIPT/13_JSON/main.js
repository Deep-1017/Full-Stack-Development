let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  spouse: null
}

let toString = JSON.stringify(student)

console.log(toString)

console.log(JSON.parse(toString))