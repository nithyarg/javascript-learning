const dailyRoutine = ["cow","dog","cat","rabbit"];

let dailyRoutines = dailyRoutine.join("'s ");

console.log(dailyRoutines);



let fullName = "Anbu selvan";

let userName = fullName.split(" ");

let firstName = userName[0];
let lastName = userName[1];

console.log(`My First name is ${firstName} and last name is ${lastName}`);



let postTitle = "This is my post!";

let postSlug = postTitle.split(" ");

let finalSlug = postSlug.join('-');

console.log(finalSlug);