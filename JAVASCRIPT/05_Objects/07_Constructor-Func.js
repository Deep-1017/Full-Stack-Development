
// Constructor Function
function Person(name, age, email, password, city) {
  // code
  this.name = name;
  this.age = age;
  this.email = email;
  this.password = password;
  this.city = city;
  this.info = function() {
    console.log(`Hi! My name is ${this.name} & I am ${this.age} years old`);
  }
}

const father = new Person("John", 45, "john@gmail.com", "John@123", "Ahmd");
const mother = new Person("Alice", 43, "alice@gmail.com", "Alice@123", "US");
const son = new Person("Jack", 19, "jack@gmail.com", "Jack@123", "Aus");
const daughter = new Person("Ann", 10, "ann@gmail.com", "Ann@123", "SA");


console.log(father.info());

