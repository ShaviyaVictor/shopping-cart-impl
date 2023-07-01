
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
      // console.log(eachItem)
      // destructuring assignment impl to avoid calling cart items using the eachItem.id formart of calling prop values
      let { id, items } = eachItem;
      let search = catalogueItems.find((item) => item.id === id) || [];
      return `

      <div class="flex w-2/5">
      <div class="w-20">
        <img class="h-24" src="https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z" alt="">
      </div>
      <div class="flex flex-col justify-between ml-4 flex-grow">
        <span class="font-bold text-sm">Iphone 6S</span>
        <span class="text-red-500 text-xs">Apple</span>
        <a href="#" class="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
      </div>
    </div>
    <!-- quantity change section -->
    <div class="flex justify-center w-1/5">
      <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
      </svg>

      <input class="mx-2 border text-center w-8" type="text" value="1">

      <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
        <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
      </svg>
    </div>
    <!-- unit price and total  -->
    <span class="text-center w-1/5 font-semibold text-sm">$400.00</span>
    <span class="text-center w-1/5 font-semibold text-sm">$400.00</span>

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