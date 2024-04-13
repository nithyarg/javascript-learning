//combining Arrays

const shopping_cart =[{ item:"Magi"}];
const additional_cart = ["Matchbox","Salt","Beans","Masala"];
// combine
let recipe = shopping_cart.concat(additional_cart);
shopping_cart[0].item = "Noodles";

// Extract
let extractedInfo = recipe.slice(1,3);


console.log(recipe);
console.log(extractedInfo);