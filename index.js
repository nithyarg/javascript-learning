// filtering a javascript array

// const queue_by_age = [16,32,45];

// let adults = queue_by_age.filter(function (value) {
//     return value >= 18;
// });


// console.log("adults:", adults);  


const numbers = [1,2,3,4,5];

let evenNumbers = numbers.filter(function(value){
    return value % 2 == 0;
});

let oddNumbers = numbers.filter(function(value){
    return value % 2 == 1;

});

console.log("Even Numbes", evenNumbers);
console.log("Odd Numbers", oddNumbers);