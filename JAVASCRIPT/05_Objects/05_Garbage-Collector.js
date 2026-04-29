let user = {
  name: "John"
};

let admin = user;

user = null; // user is now null, but admin still references the object

admin.name = "Alice"
admin.age = 30

// console.log(user); // Output: null
// console.log(admin); // Output: null


// console.log(admin.name); // Output: John





// Interlinked objects

function marry(man, woman) {
    man.wife = woman
    woman.husband = man

    return {
        father: man,
        mother: woman
    }
}

let family = marry({name: "John"}, {name: "Alice"})

console.log(family);

delete family.father;
delete family.mother.husband;

console.log(family.father.name);
console.log(family.mother.husband.name);