
// * call the html sections for population
let label = document.getElementById("label");
let shoppingCart = document.getElementById("shoppingCart");
// let backShopping = document.getElementById("shop");

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
    return (shoppingCart.innerHTML = basket.map((eachItem) => {
      // console.log(eachItem)
      // destructuring assignment impl to avoid calling cart items using the eachItem.id formart of calling prop values
      let { id, items } = eachItem;
      let search = catalogueItems.find((item) => item.id === id) || [];
      return `

      <div class="cartItem">
        <img width="100" src=${search.img} alt="">

        <div class="details">
          <div class="title-price-x">
            <h4 class="title-price">
              <p>${search.product_title}</p>
              <p class="text-bold cart-price">${search.price_new}</p>
            </h4>
            <i class="bi bi-x-lg"></i>
          </div>

          <div class="product_buttons">
            <button onclick="itemDecreament(${id})" class="product_remove"><i class="bi bi-dash-lg"></i></i></button>
            <span id="${id}">${items}</span>
            <button onclick="itemIncreament(${id})" class="add_to_cart"><i class="bi bi-plus-lg"></i></button>
          </div>

          <h3></h3>
        </div>

      </div>

      `
    }).join("")
    )
  } else {
    // console.log("The basket is empty...")
    // * Use template literals to get the html to the DOM via JS 
    shoppingCart.innerHTML = ``;
    label.innerHTML = `
      <h2>Oops 🤭 Your Cart Is Empty...</h2>
      <a href="index.html">
        <button class="homeBtn">
          Let's shop 🛒
        </button>
      </a>
    `;
    backShopping.innerHTML = ``;
  }
}
showCartItems();