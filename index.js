// //Dynamic object
const person = {
  name: "Anbu"
} 

person.age =24;
person.greeting =function(){}

delete person.greeting;

console.log(person);

// constructor functions

function person (name) {
  this.name = name;
  this.greeting = function () {
    console.log('my name is ${this.name}');
  }
}

const person2 = new person(trisha);
