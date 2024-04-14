// jvascript chaining methods

let products = [
    {id:1, title: "Android phone",cost:7500},
    {id:2, title: "Gaming Computer", cost:90500},
    {id:3, title: "Headphone", cost: 2400},
];

// sort it using lowest price.
let sortByLowestPrice = products.sort(function (a,b){
    return a.cost - b.cost; //ascending
    return b.cost - a.cost; //descending
});

// sort it by title ascending

let sortByTitle = sortByLowestPrice.sort(function(a,b){
    if(a.title < b.title) return -1;

    if(a.title > b.title) return 1;

    return 1;
});

//filter products less than 8000
 let filtered = sortByTitle.filter(function(value){
    return value.cost <= 8000;
});

// map it like this : // Android phone - 7500

let final = filtered.map(function (vol){
    return val.title + " - " + val.cost;
});
 

console.log(final);