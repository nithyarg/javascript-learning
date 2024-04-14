// Difference between find and filter methods.
const items = [
    {id:1,item: "Android Mobile", cost: 6500},
    {id:2,item: "iPhone", cost: 27000},
    {id:3,item: "Windows Phone", cost: 8500},
];

let affordableFilter = items.filter(function (value){
    return value.cost < 10000; 
});

let affordable = items.find(function (value){
    return value.cost < 10000; 
});

console.log("affordableFilter", affordableFilter);

console.log("affordable - find",affordable);

// ["list1","list 2"]

// {value} 