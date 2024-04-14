 // javascript arrays - reduce method 
 const donations = [45,78,95,65,4851];

 donations.reduce(function (previousVal, currentVal){
    // logic
    console.log("previousVal", previousVal);
    console.log("currentVal", currentVal);

    return previousVal + currentVal;
 });

 let totalDonations= donations.reduce(function(previousval,currentVal){
    return previousval+currentVal;
 });

 console.log("totalDonations",totalDonations);


 const shoppingCart = [
   {id: 1, item:"organic milk",cost: 45},
   {id: 2, item:"bread",cost: 20},
   {id: 3, item:"maagi",cost: 12},
   
 ];
 function addCost(accumulator,currentVal){
      return accumulator + currentVal.cost;
 }

 
 
 let totalCost = shoppingCart.reduce(addCost,10);

 console.log("your total amount is:", totalCost);