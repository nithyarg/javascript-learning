 // oops
//  let person = {
//   name:"anbu",
//   age: 24,
//   interest: ['creating ,teaching new things.'],
//   isalive: true,
//   address:{
//     city:'chennai',
//     state: 'Tamil Nadu',
//   },
//   greeting: function(){
//     let msg = 'my name is ${this.name},i love ${this.interest}';
//     console.log(msg);
//   }
//  };

//  console.log(person.interest);

//factory createperson

function createPerson(name){
  return {
    name: name,
    greeting: function(){
      let msg = 'My name is ${this.name}';
      console.log(msg); 
    }
  };
  
}

let nithi = createPerson("nithi")
nithi.greeting();