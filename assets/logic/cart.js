
// * call the html sections for population
let cartItem = document.getElementById("cart-item");
let summary = document.getElementById("summary");
let backShopping = document.getElementById("shop");

let basket = JSON.parse(localStorage.getItem("basketItems")) || [];
// console.log(basket)


// items in cart count 
let totalItems = () => {
  let cartItems = document.getElementById("cart-items");
  // * reduce function takes in the previous Num and the next Num and sums them up and adds them on the the defined default value of 0
  cartItems.innerHTML = basket.map((item) => item.items)
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
      return `
      <h1> YEAH </h1>
      `
    }).join("")
    )
  } else {
    // console.log("The basket is empty...")
    // * Use template literals to get the html to the DOM via JS 
    summary.innerHTML = ``;
    cartItem.innerHTML = `
      <a href="/index.html" class="flex font-semibold text-indigo-600 text-sm mt-10">        
        <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
         Go Shopping
      </a>
    `;
    backShopping.innerHTML = ``;
  }
}
showCartItems();