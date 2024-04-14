 // Testing elements in javascript Array - reference type

 const items = [
    {id: 1, nmae:"Mobiles", isDeliverable:true},
    {id: 2, nmae:"Accessories", isDeliverable:true},
    {id: 3, nmae:"T.V", isDeliverable:false},
    
 ];

 let allDeliverable = items.every (function(value){
    return value.isDeliverable == true;
 });

 let notDeliverable = items.every (function(value){
    return value.isDeliverable == true;
 });


 console.log("AllDeliverable",allDeliverable);
 console.log("NotDeliverable", notDeliverable);