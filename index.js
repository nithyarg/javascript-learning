//Finding element in javascript array

const items =["Apple","Lemon","Grapes","Apple"]

console.log(items.indexOf("Apple"));

console.log(items.lastIndexOf("Apple"));

console.log(items.indexOf("Grapes") !== -1) //or


console.log (items.includes("Banana"));


// finding element js Reference array

 const orders = [
    {id:1,item:"Smartphones", quantity:1},
    {id:2,item:"Maagi", quantity:3},
 ];

  let result = orders.find(function(order){
   return order.item === "Maagi"
  })


  console.log(result);