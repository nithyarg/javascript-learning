// javascript:
// sort(),find() vs filter vs map() vs reduce
  
const numbers =[34,4,65,12,78];


// sort()
let result1 = numbers.sort();

// find
 let result2 = numbers.find((value) => {
    return value > 50;
});

// filter

let result3 = numbers.filter((value) => {
    return value > 50;
});

// map
let result4= numbers.map((value) => {
    return  "#" + value ;
});

// redue

let result5= numbers.reduce((acc, value) => {
    return  acc * value ;
});

// map2
let result6 = number.map((acc,value) => {
    return acc * value;
});







console.log(result1); 
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);

