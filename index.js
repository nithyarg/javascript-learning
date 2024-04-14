// testing a javascript array with examples
 // Allow only adults above 18

const queue_by_age = [24,32,45];

// let isAllowed = queue_by_age.every(function (value,index,array){
//     console.log(`value: ${value}`);
//     console.log("index",index);
//     console.log("array",array);
// }) ;

let isAllowed = queue_by_age.every(function (value,index,array){
    return value >= 18;
});

console.log("isAllowed: ",isAllowed); 


// every() => true, ella condtions true va irrukanum apa tha true o/p varum.
// some()  => true , intha condtions la  oru number value true va irruntha ve 
               // pothum. o/p la true varum
                