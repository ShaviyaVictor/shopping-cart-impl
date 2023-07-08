
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
      let calculations = items * search.price_new;
      // use double tilde/ double bitwise not operator to round off the above calculations into the nearest floor int
      let total = ~~ calculations;
      
      return `

      <div class="cartItem">
        <img width="100" src=${search.img} alt="">

        <div class="details">
          <div class="title-price-x">
            <h4 class="title-price">
              <p>${search.product_title}</p>
              <p class="text-bold cart-price">$${search.price_new}</p>
            </h4>
            <i class="bi bi-x-lg" onclick="removeItem(${id})"></i>
          </div>

          <div class="product_buttons pl-2">
            <button onclick="itemDecreament(${id})" class="product_remove"><i class="bi bi-dash-lg"></i></i></button>
            <span id="${id}">${items}</span>
            <button onclick="itemIncreament(${id})" class="add_to_cart"><i class="bi bi-plus-lg"></i></button>
          </div>

          <h3 class="text-bold pl-2">
            $ ${total}
          </h3>
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


// * functions literally copied from the MediaDeviceInfo.js file for some functionality that is needed here
// TODO please check the MediaDeviceInfo.js file for comments on the below 3 logics 

let itemIncreament = (id) => {
  let increasedItem = id;

  let itemSearch = basket.find((item) => item.id === increasedItem.id);

  if (itemSearch === undefined) {
    basket.push({
      id: increasedItem.id,
      items: 1,
    });
  }
  else {
    itemSearch.items += 1;
  }

  // * to update the cart
  showCartItems();

  itemsUpdate(increasedItem.id);

  localStorage.setItem("basketItems", JSON.stringify(basket));

}


// item decrement function 
let itemDecreament = (id) => {
  let deductedItem = id;

  let itemSearch = basket.find((item) => item.id === deductedItem.id);
  
  if (itemSearch === undefined) {
    return;
  }

  else if (itemSearch.items === 0) 
    return;
  else itemSearch.items -= 1;

  itemsUpdate(deductedItem.id);

  basket = basket.filter((item) => item.items !== 0);

  localStorage.setItem("basketItems", JSON.stringify(basket));

  // * to remove the item from cart when the decrement gets to 0
  showCartItems();

}


// count update function to show the number of items added
let itemsUpdate = (id) => {
  let itemSearch = basket.find((item) => item.id === id);

  document.getElementById(id).innerHTML = itemSearch.items;

  totalItems();

  totalAmount();

}


let removeItem = (id) => {
  let toRemove = id;

  // console.log(toRemove)
  // console.log(toRemove.id)
  basket = basket.filter((item) => item.id !== toRemove.id);
  
  totalAmount();

  localStorage.setItem("basketItems", JSON.stringify(basket));

  showCartItems();

  // TODO look into why the below update for the total number of items is not working as expected once a client removes the item entirely
  // itemsUpdate(toRemove.id);

}


// * to clear all items from the shopping cart and remove them from local storage 
let clearCart = () => {
  basket = [];

  localStorage.setItem("basketItems", JSON.stringify(basket));
  
  showCartItems();
}


// * to calculate the total amount and display 
let totalAmount = () => {
  if (basket.length !== 0) {

    let amount = basket.map((eachItem) => {
      let { id, items } = eachItem;
      let search = catalogueItems.find((item) => item.id === id) || [];
      let approxCalc = items * search.price_new;

      return ~~approxCalc;
    }).reduce((previous, next) => previous + next, 0);
    // console.log(amount);

    label.innerHTML = `
    <h2>
      Total Bill: <span class="text-bold">$ ${amount}</span>
    </h2>
    <button class="checkout">
      Checkout
    </button>
    <button class="clear" onclick="clearCart()">
      Clear Cart
    </button>
    `

  } else return;
}
totalAmount();
