
// * call the html sections for population
let label = document.getElementById("cart-item");
let shoppingCart = document.getElementById("shoppingCart");
let backShopping = document.getElementById("shop");

let basket = JSON.parse(localStorage.getItem("basketItems")) || [];
// console.log(basket)


// items in cart count 
let totalItems = () => {
  let label = document.getElementById("cart-items");
  // * reduce function takes in the previous Num and the next Num and sums them up and adds them on the the defined default value of 0
  label.innerHTML = basket.map((item) => item.items)
                              .reduce((prevNum, nextNum) => prevNum + nextNum, 0)
  
};
totalItems(); 


// * function to hold 2 scenarios;
  // * when we dont have items in the cart 
  // * and when we have items in the cart 
let showCartItems = () => {
  // capture the scenarios using the if-else statement 
  if (basket.length !== 0) {
    // console.log("The basket has some items")
    return (cartItem.innerHTML = basket.map((eachItem) => {
      // console.log(eachItem)
      // destructuring assignment impl to avoid calling cart items using the eachItem.id formart of calling prop values
      let { id, items } = eachItem;
      let search = catalogueItems.find((item) => item.id === id) || [];
      return `

      

      `
    }).join("")
    )
  } else {
    // console.log("The basket is empty...")
    // * Use template literals to get the html to the DOM via JS 
    shoppingCart.innerHTML = ``;
    cartItem.innerHTML = `
      
    `;
    backShopping.innerHTML = ``;
  }
}
showCartItems();