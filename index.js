//combining Arrays

const shopping_cart =["Beans","Masala","Maagi"];
const additional_cart = ["Matchbox","Salt",];
// combine
// let recipe = shopping_cart.concat(additional_cart);

//spread operator
let recipe = [...shopping_cart,45,...additional_cart]; 



console.log(recipe);
