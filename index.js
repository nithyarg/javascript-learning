// testing is it odd or even 
//const numbers = [2,4,6];

// every()
// let isEven = numbers.every(function (value){
//     return value % 2 === 0;
// });

// console.log("isEven: ",isEven);

// some

const numbers = [1,2,3,4,5];

let isOdd = numbers.some(function (value){
    return value % 2 === 1;
});

console.log("isOdd: ", isOdd);